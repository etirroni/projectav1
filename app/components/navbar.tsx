"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // modern icons

const navItems = [

  { id: "about", label: "About Us", href: "/about" },
  { id: "activities", label: "Activities & Services", href: "/activities" },
  { id: "contact", label: "Contact & Booking", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-lg border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide neon-text hover:scale-105 transition-transform"
        >
          Arctic Adventures
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`relative py-2 transition-all ${
                  isActive(item.href)
                    ? "text-amber-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-300 after:rounded-full"
                    : "text-white hover:text-amber-200"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-black/70 backdrop-blur-md flex flex-col items-center gap-4 py-6 text-lg md:hidden animate-fade-in">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-amber-300 border-b-2 border-amber-300"
                      : "text-white hover:text-amber-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}