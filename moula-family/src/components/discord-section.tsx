"use client";

import { motion } from "framer-motion";

export function DiscordSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 bg-[#111111] border border-[rgba(255,45,120,0.2)] p-10 text-center"
    >
      <h3 className="font-heading text-[32px] text-blanc tracking-wider mb-3">
        REJOINS LE DISCORD
      </h3>
      <p className="text-sm text-blanc/50 mb-8">
        Discute avec la famille avant de postuler
      </p>
      <a
        href="https://discord.gg/moula-family"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-[#FF2D78] text-[#FF2D78] bg-transparent font-heading text-[16px] tracking-[3px] px-10 py-3 uppercase transition-all duration-300 hover:bg-[#FF2D78] hover:text-noir"
      >
        REJOINDRE LE DISCORD
      </a>
    </motion.div>
  );
}
