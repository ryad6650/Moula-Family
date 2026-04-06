"use client";

import { motion } from "framer-motion";

export function RejoindreHeader() {
  return (
    <div className="mb-16 relative">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(255, 107, 53, 0.06), transparent 60%)" }}
      />
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-heading text-[12px] tracking-[4px] uppercase block mb-4"
        style={{ color: "#F7C948" }}
      >
        CANDIDATURE
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-heading text-6xl md:text-7xl tracking-wider uppercase"
      >
        <span
          style={{
            background: "linear-gradient(135deg, #FF6B35, #F7C948)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          REJOINDRE
        </span>{" "}
        LA FAMILLE
      </motion.h1>
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
