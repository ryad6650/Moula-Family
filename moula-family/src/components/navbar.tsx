"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/membres", label: "Membres" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderBottom: "1px solid rgba(255, 107, 53, 0.1)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="editorial-padding h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Accueil">
          <Image
            src="/logo-moula-nav.svg"
            alt="Famille Moula"
            width={200}
            height={40}
            style={{ height: "36px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-6">
              <Link
                href={link.href}
                className="font-accent text-[15px] tracking-[3px] uppercase transition-colors duration-300"
                style={{ color: "rgba(245, 240, 235, 0.5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F7C948")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245, 240, 235, 0.5)")}
              >
                {link.label}
              </Link>
              {i < navLinks.length && (
                <span
                  style={{
                    width: "1px",
                    height: "16px",
                    background: "linear-gradient(180deg, transparent, #FF6B35, transparent)",
                    opacity: 0.4,
                  }}
                />
              )}
            </span>
          ))}
          <Link
            href="/rejoindre"
            className="font-accent text-[15px] tracking-[3px] uppercase transition-colors duration-300"
            style={{ color: "#FF6B35" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F7C948")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#FF6B35")}
          >
            Rejoindre
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden transition-colors"
          style={{ color: "rgba(245, 240, 235, 0.6)" }}
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
            className="md:hidden backdrop-blur-xl overflow-hidden"
            style={{
              backgroundColor: "rgba(10, 10, 18, 0.95)",
              borderBottom: "1px solid rgba(255, 107, 53, 0.1)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-accent text-[15px] tracking-[3px] uppercase transition-colors"
                  style={{ color: "rgba(245, 240, 235, 0.5)" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/rejoindre"
                onClick={() => setOpen(false)}
                className="mt-2 font-accent text-[15px] tracking-[3px] uppercase"
                style={{ color: "#FF6B35" }}
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
