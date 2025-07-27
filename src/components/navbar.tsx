"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const items = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#techStack", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-lg">
          Téringer Alex<span className="text-indigo-500">.dev</span>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {items.map((i) => (
              <li key={i.href}>
                <a href={i.href} className="hover:text-indigo-500">
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
