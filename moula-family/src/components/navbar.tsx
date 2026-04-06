"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoCompact } from "./logo";

const navLinks = [
  { href: "/", label: "Accueil", color: "rgba(240,239,244,0.4)" },
  { href: "/membres", label: "Membres", color: "rgba(240,239,244,0.4)" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-noir/80 backdrop-blur-md border-b border-white/[0.04]"
      style={{ backgroundColor: "rgba(5,5,7,0.8)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="editorial-padding h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Accueil">
          <LogoCompact />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] font-sans tracking-[1.5px] text-blanc/40 hover:text-blanc transition-colors duration-300 uppercase"
              style={{ color: link.color }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/rejoindre"
            className="text-[12px] font-sans tracking-[2px] text-neon hover:text-neon-light transition-colors duration-300 uppercase"
            style={{ color: "#FF2D78" }}
          >
            Rejoindre
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blanc/60 hover:text-blanc transition-colors"
          style={{ color: "rgba(240,239,244,0.6)" }}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-noir/95 backdrop-blur-md border-b border-white/[0.04] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[13px] tracking-[1.5px] text-blanc/40 hover:text-blanc transition-colors uppercase"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/rejoindre"
                onClick={() => setOpen(false)}
                className="mt-2 text-[12px] tracking-[2px] text-neon uppercase"
              >
                Rejoindre
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
