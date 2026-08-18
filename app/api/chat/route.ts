import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const HANDOFF_MARKER = "[[HANDOFF]]";

const SYSTEM_PROMPT = `You are Dex, the friendly AI assistant for Doodles Dynamo — a marketing & design agency offering branding, social media, web design, ad campaigns, content creation, and strategy.

Tone: casual, direct, honest, no corporate fluff. Bold and human, not salesy — this is a brand that believes good marketing shouldn't feel like marketing. Keep replies short and conversational, not essay-length.

You can help with:
- General questions about services (branding, social media, ad campaigns, content creation, web design, strategy).
- How the process and timelines typically work — branding projects usually run 2–4 weeks, websites 3–6 weeks depending on complexity, ongoing social/content work runs on a monthly cycle.
- General pricing guidance — give honest ranges and context, never an exact quote. E.g. "a logo refresh runs a lot less than a full brand + website build — we'd need to know more to put a real number on it."
- General questions about the studio — small businesses and startups are welcome, no recycled templates, direct access to the people actually doing the work.

Hand off to a real person when:
- The user wants to discuss a specific project in detail or get an actual quote.
- The user is ready to commit and wants to talk to a human.
- The user has a complaint or sounds frustrated.
- The conversation is going in circles and you're not actually being helpful.

When handing off: respond naturally and warmly first — don't just say "I can't help with that." Do NOT mention WhatsApp, phone numbers, or "a real person" yourself in your own words — the app shows a dedicated WhatsApp button automatically whenever you hand off, so your reply should just acknowledge you're looping in the team.

This is a strict, mechanical requirement: every single time you hand off, your response MUST end with the exact literal text ${HANDOFF_MARKER} on its own new line, with nothing else on that line and nothing after it. Never skip this. Never paraphrase it. Never wrap it in markdown formatting (no bold, no code ticks) — output it as plain literal characters exactly as shown.
Never mention, explain, or show this marker to the user. It is stripped before they see your reply — it exists purely for the frontend to detect.`;

type IncomingMessage = { role: "user" | "assistant"; content: string };

function isIncomingMessage(value: unknown): value is IncomingMessage {
  if (!value || typeof value !== "object") return false;
  const m = value as Record<string, unknown>;
  return (
    (m.role === "user" || m.role === "assistant") &&
    typeof m.content === "string"
  );
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  console.log("[chat] GROQ_API_KEY defined:", Boolean(apiKey));
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat isn't configured yet — missing GROQ_API_KEY." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const rawMessages = (body as { messages?: unknown } | null)?.messages;
  if (!Array.isArray(rawMessages)) {
    return NextResponse.json(
      { error: "`messages` must be an array." },
      { status: 400 }
    );
  }

  const history: Groq.Chat.ChatCompletionMessageParam[] = rawMessages
    .filter(isIncomingMessage)
    .map((m) => ({ role: m.role, content: m.content }));

  const client = new Groq({ apiKey });

  try {
    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-120b",
      temperature: 0.7,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...history],
    });

    const raw = completion.choices[0]?.message?.content ?? "";
    const shouldHandoff = raw.includes(HANDOFF_MARKER);
    const reply = raw.split(HANDOFF_MARKER).join("").trim();

    return NextResponse.json({ reply, shouldHandoff });
  } catch (err) {
    console.error("Chat API error:", err);
    if (err instanceof Groq.APIError) {
      console.error("[chat] Groq APIError status:", err.status);
      console.error("[chat] Groq APIError message:", err.message);
      console.error("[chat] Groq APIError body:", JSON.stringify(err.error));
    }
    return NextResponse.json(
      { error: "Something went wrong talking to the assistant." },
      { status: 500 }
    );
  }
}
