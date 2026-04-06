"use client";

import { motion } from "framer-motion";

export function MembresHeader() {
  return (
    <div className="mb-16 relative overflow-hidden">
      {/* BG image subtle */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          backgroundImage: "url('/los-santos.jpg')",
          backgroundPosition: "right center",
          backgroundSize: "cover",
          opacity: 0.08,
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent)",
        }}
      />
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-heading text-[12px] tracking-[4px] uppercase block mb-4"
        style={{ color: "#F7C948" }}
      >
        01 — L&apos;ÉQUIPE
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-heading text-6xl md:text-7xl tracking-wider uppercase"
      >
        LES{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #FF6B35, #F7C948)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MEMBRES
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 max-w-md"
        style={{ color: "rgba(245, 240, 235, 0.5)" }}
      >
        Chaque membre de la Famille Moula porte un rôle, une histoire et une ambition qui font tourner l&apos;empire de Paris.
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 h-[2px] w-20 origin-left"
        style={{ background: "linear-gradient(90deg, #FF6B35, transparent)" }}
      />
    </div>
  );
}
