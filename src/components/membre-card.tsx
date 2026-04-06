"use client";

import { motion } from "framer-motion";
import type { Membre } from "@/data/membres";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
    </svg>
  );
}

interface MembreCardProps {
  membre: Membre;
  index: number;
}

export function MembreCard({ membre, index }: MembreCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden"
      style={{
        minHeight: "220px",
        padding: "32px",
        background: "rgba(0, 0, 0, 0.6)",
        border: "1px solid rgba(255, 107, 0, 0.15)",
        transition: "all 0.4s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid rgba(255, 107, 0, 0.5)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 107, 0, 0.08)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(255, 107, 0, 0.15)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-400 origin-left scale-x-0 group-hover:scale-x-100"
        style={{ background: "linear-gradient(90deg, #FF6B35, #F7C948, #E84393)" }}
      />

      {/* Index number */}
      <span
        className="absolute top-4 right-4 font-heading text-5xl font-bold leading-none"
        style={{ color: "rgba(255, 107, 0, 0.06)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Avatar + infos */}
      <div className="flex items-center gap-4">
        <div
          className="flex-shrink-0 flex items-center justify-center"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "rgba(255, 107, 0, 0.2)",
          }}
        >
          <span className="font-heading text-[24px]" style={{ color: "#FF6B35" }}>
            {membre.pseudo.charAt(0)}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h3
            className="font-heading truncate"
            style={{
              fontSize: "22px",
              letterSpacing: "1px",
              color: "#ffffff",
            }}
          >
            {membre.pseudo.toUpperCase()}
          </h3>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#FF6B35",
            }}
          >
            {membre.role}
          </p>
        </div>
      </div>

      {/* Social icons — bottom right */}
      {(membre.tiktok || membre.discord) && (
        <div className="flex items-center gap-3 ml-auto" style={{ marginTop: "auto" }}>
          {membre.tiktok && (
            <a
              href={membre.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "rgba(255, 255, 255, 0.3)" }}
            >
              <TikTokIcon />
            </a>
          )}
          {membre.discord && (
            <a
              href={membre.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "rgba(255, 255, 255, 0.3)" }}
            >
              <DiscordIcon />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
