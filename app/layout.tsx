import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doodles Dynamo — Marketing & Design Agency",
  description:
    "Strategy, design and content that turns scrollers into customers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Titan+One&family=Work+Sans:wght@400;500;600&family=Caveat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
