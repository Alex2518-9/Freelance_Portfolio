import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

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
      <body
        className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
