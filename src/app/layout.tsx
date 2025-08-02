import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Téringer Alex – Front‑End Developer",
  description:
    "Front-end developer portfolio showcasing React, Next.js, and Tailwind projects.",
  openGraph: {
    title: "Téringer Alex – Front‑End Developer",
    description:
      "Front-end developer portfolio showcasing React, Next.js, and Tailwind projects.",
    type: "website",
    url: "https://yourdomain.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
