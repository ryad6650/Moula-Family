"use client";

import { motion } from "framer-motion";

export function DiscordSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 p-10 text-center relative overflow-hidden"
      style={{
        background: "#12121E",
        border: "1px solid rgba(255, 107, 53, 0.15)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255, 107, 53, 0.05), transparent)" }}
      />
      <h3 className="font-heading text-[32px] tracking-[2px] uppercase mb-3 relative" style={{ color: "#F5F0EB" }}>
        REJOINS NOTRE DISCORD
      </h3>
      <p className="text-sm mb-8 relative" style={{ color: "rgba(245, 240, 235, 0.5)" }}>
        Discute avec la famille avant de postuler
      </p>
      <a
        href="https://discord.gg/2dXRJFwzR6"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-clip-right relative inline-block font-heading text-[14px] tracking-[3px] px-10 py-3 uppercase transition-all duration-300"
        style={{
          border: "1px solid #FF6B35",
          color: "#FF6B35",
          background: "transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255, 107, 53, 0.1)";
          e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 107, 53, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        REJOINDRE LE DISCORD
      </a>
    </motion.div>
  );
}
