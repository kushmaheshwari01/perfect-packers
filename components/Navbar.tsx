"use client";

import Link from "next/link";
import { Menu, X, Package2 } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-900 p-2 text-white">
            <Package2 size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Perfect Packers
            </h1>

            <p className="text-xs text-slate-500">
              Corrugated Packaging
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-slate-700 transition hover:text-blue-900"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}

        <button className="hidden rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 md:block">
          Get Quote
        </button>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col gap-6 p-6">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg"
              >
                {link.name}
              </Link>
            ))}

            <button className="rounded-xl bg-blue-900 py-3 text-white">
              Get Quote
            </button>

          </div>
        </div>
      )}
    </header>
  );
}