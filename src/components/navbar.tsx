"use client";

import { useScrollStart } from "@/hooks/useScrollDetection";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const items = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#techStack", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const isScrolling = useScrollStart();
  return (
    <header
      className={twMerge(
        "sticky top-0 z-50 backdrop-blur bg-gray-800 text-white transition-all duration-300 ease-in-out",
        isScrolling && " bg-gray-800/70"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-xl">
          Téringer Alex<span className="text-indigo-500">.dev</span>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-14 text-lg">
            {items.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  className="hover:text-indigo-500 transition-colors duration-300 ease-in-out"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
