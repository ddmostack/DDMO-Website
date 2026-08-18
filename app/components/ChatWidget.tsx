"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

const WHATSAPP_NUMBER = "923702954850";
const WHATSAPP_MESSAGE =
  "Hi! I was chatting with DDMO on the Doodles Dynamo website and would love to continue this with you.";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  handoff?: boolean;
};

const GREETING: ChatMessage = {
  id: "greeting",
  role: "assistant",
  content:
    "Hey! We are DDMO 👋 Ask anything about Doodles Dynamo, or let me know what you're building.",
};

let idCounter = 0;
const nextId = () => `msg-${Date.now()}-${idCounter++}`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const wasLoadingRef = useRef(false);

  useEffect(() => {
    if (!open) return;
    feedRef.current?.scrollTo({ top: feedRef.current.scrollHeight });
  }, [open, messages, loading]);

  // Refocus the input once the bot's response lands (loading: true -> false),
  // but never on initial mount and never while the widget is closed.
  useEffect(() => {
    if (wasLoadingRef.current && !loading && open) {
      inputRef.current?.focus();
    }
    wasLoadingRef.current = loading;
  }, [loading, open]);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: ChatMessage = { id: nextId(), role: "user", content: text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    inputRef.current?.focus();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((m) => m.id !== "greeting")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error("Chat request failed");
      const data = (await res.json()) as {
        reply?: string;
        shouldHandoff?: boolean;
        error?: string;
      };

      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: "assistant",
          content:
            data.reply ||
            "Sorry, I couldn't quite get that — mind trying again?",
          handoff: Boolean(data.shouldHandoff),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: "assistant",
          content:
            "Hmm, something went wrong on my end. Try again in a moment?",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <>
      <motion.button
        className="chat-toggle"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg
              key="close"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0C2578"
              strokeWidth="2.4"
              strokeLinecap="round"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.18 }}
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg
              key="bubble"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0C2578"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{ duration: 0.18 }}
            >
              <path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 9 9 0 0 1-2.5-.4L3 21l1.5-4.5A8.4 8.4 0 0 1 3 11.5 8.4 8.4 0 0 1 11.5 3a8.4 8.4 0 0 1 9.5 8.5z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <div className="chat-header">
              <div className="chat-header-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0C2578" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 9 9 0 0 1-2.5-.4L3 21l1.5-4.5A8.4 8.4 0 0 1 3 11.5 8.4 8.4 0 0 1 11.5 3a8.4 8.4 0 0 1 9.5 8.5z" />
                </svg>
              </div>
              <div className="chat-header-text">
                <span className="chat-header-title">Chat with DDMO</span>
                <span className="chat-header-sub">Doodles Dynamo</span>
              </div>
            </div>

            <div className="chat-feed" ref={feedRef}>
              {messages.map((m) => (
                <div key={m.id} className={`chat-row chat-row-${m.role}`}>
                  <div className={`chat-bubble chat-bubble-${m.role}`}>
                    {m.role === "assistant" ? (
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    ) : (
                      m.content
                    )}
                  </div>
                  {m.handoff && (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chat-whatsapp-cta"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.42 19.64L5.26 16.59L5.06 16.27C4.22 14.96 3.78 13.45 3.78 11.91C3.78 7.37 7.5 3.65 12.05 3.65C14.25 3.65 16.31 4.5 17.87 6.06C19.42 7.62 20.28 9.69 20.28 11.91C20.27 16.46 16.55 20.15 12.04 20.15ZM16.56 13.99C16.32 13.87 15.15 13.29 14.93 13.21C14.71 13.13 14.55 13.09 14.39 13.34C14.23 13.59 13.77 14.13 13.63 14.29C13.49 14.45 13.35 14.47 13.11 14.35C12.87 14.23 12.1 13.98 11.19 13.17C10.48 12.54 10 11.76 9.86 11.51C9.72 11.26 9.84 11.13 9.96 11.01C10.07 10.9 10.2 10.72 10.32 10.58C10.44 10.44 10.48 10.34 10.56 10.18C10.64 10.02 10.6 9.88 10.54 9.76C10.48 9.64 10 8.47 9.8 8C9.6 7.53 9.4 7.6 9.25 7.59C9.11 7.58 8.95 7.58 8.79 7.58C8.63 7.58 8.37 7.64 8.15 7.88C7.93 8.12 7.31 8.7 7.31 9.87C7.31 11.04 8.17 12.17 8.29 12.33C8.41 12.49 10 14.91 12.42 15.94C13 16.19 13.45 16.34 13.8 16.45C14.38 16.64 14.91 16.61 15.33 16.55C15.8 16.48 16.77 15.97 16.97 15.4C17.17 14.83 17.17 14.35 17.11 14.25C17.05 14.15 16.89 14.09 16.65 13.97L16.56 13.99Z" />
                      </svg>
                      Continue on WhatsApp
                    </a>
                  )}
                </div>
              ))}

              {loading && (
                <div className="chat-row chat-row-assistant">
                  <div className="chat-bubble chat-bubble-assistant chat-typing">
                    <span className="chat-typing-dot" />
                    <span className="chat-typing-dot" />
                    <span className="chat-typing-dot" />
                  </div>
                </div>
              )}
            </div>

            <form className="chat-input-row" onSubmit={sendMessage}>
              <input
                ref={inputRef}
                type="text"
                className="chat-input"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="chat-send"
                aria-label="Send message"
                disabled={loading || !input.trim()}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#0C2578" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
