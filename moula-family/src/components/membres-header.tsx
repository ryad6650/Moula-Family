"use client";

import { motion } from "framer-motion";

export function MembresHeader() {
  return (
    <div className="mb-16 text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[11px] tracking-[3px] text-gold/80 block mb-4"
      >
        01 — ÉQUIPE
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-heading text-6xl md:text-7xl tracking-wider"
      >
        NOS MEMBRES
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 text-blanc/40 max-w-md mx-auto"
      >
        Ceux qui font vivre la Famille Moula au quotidien.
      </motion.p>
    </div>
  );
}
