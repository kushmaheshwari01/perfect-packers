"use client";

import { useState } from "react";
import Link from "next/link";
import DevelopmentPopup from "./DevelopmentPopup";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}

          <Link href="/" className="text-2xl font-bold text-blue-900">
            Perfect Packers
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/"
              className="font-medium text-slate-700 hover:text-blue-900"
            >
              Home
            </Link>

            <Link
              href="#about"
              className="font-medium text-slate-700 hover:text-blue-900"
            >
              About
            </Link>

            <Link
              href="#products"
              className="font-medium text-slate-700 hover:text-blue-900"
            >
              Products
            </Link>

            <Link
              href="#contact"
              className="font-medium text-slate-700 hover:text-blue-900"
            >
              Contact
            </Link>

            <button
              onClick={() => setShowPopup(true)}
              className="rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Get Quote
            </button>

          </nav>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-blue-900 md:hidden"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="border-t bg-white md:hidden">

            <div className="flex flex-col gap-4 p-6">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700"
              >
                Home
              </Link>

              <Link
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700"
              >
                About
              </Link>

              <Link
                href="#products"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700"
              >
                Products
              </Link>

              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700"
              >
                Contact
              </Link>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  setShowPopup(true);
                }}
                className="rounded-xl bg-blue-900 py-3 font-semibold text-white"
              >
                Get Quote
              </button>

            </div>

          </div>
        )}
      </header>

      <DevelopmentPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
}