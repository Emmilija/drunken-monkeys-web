"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-5">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
         Drunken Monkeys 
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/menu" className="hover:text-gray-300">
            Menu
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-5 pb-5">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/menu" onClick={() => setOpen(false)}>
            Menu
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </div>
      )}
    </nav>
  );
}