"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="hero-section relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Background image Los Santos */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/los-santos.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.3) contrast(1.1)",
        }}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg,
              rgba(10, 10, 18, 0.3) 0%,
              rgba(10, 10, 18, 0.1) 40%,
              rgba(10, 10, 18, 0.6) 70%,
              rgba(10, 10, 18, 1) 100%
            ),
            linear-gradient(to right,
              rgba(0, 0, 0, 0.75) 0%,
              rgba(0, 0, 0, 0.3) 50%,
              rgba(0, 0, 0, 0.1) 100%
            )
          `,
        }}
      />

      {/* Scanlines */}
      <div className="hero-scanlines" aria-hidden="true" />

      {/* Coins décoratifs GTA */}
      <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-sunset z-20" aria-hidden="true" />
      <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-sunset z-20" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-sunset z-20" aria-hidden="true" />
      <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-sunset z-20" aria-hidden="true" />

      {/* Badge GPS Paris */}
      <div
        className="absolute top-[90px] right-12 z-20 hidden md:flex items-center gap-2 px-4 py-2 backdrop-blur-lg"
        style={{
          background: "rgba(10, 10, 18, 0.6)",
          border: "1px solid rgba(255, 107, 53, 0.3)",
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            background: "#FF6B35",
            animation: "pulse-dot 2s ease infinite",
          }}
        />
        <span className="font-heading text-[11px] tracking-[3px] uppercase" style={{ color: "#FF6B35" }}>
          Paris, France
        </span>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 px-8 md:px-16 pb-20 max-w-[900px]">
        {/* Logo LGP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "-40px", marginBottom: "8px" }}
        >
          <Image
            src="/IMG_3001.webp"
            alt="Le Grand Paname"
            width={100}
            height={100}
            priority
            style={{ width: "80px", height: "auto" }}
          />
        </motion.div>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
          style={{ width: "fit-content" }}
        >
          <span style={{ width: "40px", height: "1px", background: "#F7C948" }} />
          <span className="font-heading text-[12px] tracking-[4px] uppercase" style={{ color: "#F7C948" }}>
            Le Grand Paname &mdash; GTA RP
          </span>
          <span style={{ width: "40px", height: "1px", background: "#F7C948" }} />
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-heading font-bold leading-[0.9] tracking-[-2px] uppercase"
          style={{ fontSize: "clamp(60px, 10vw, 140px)" }}
        >
          <span className="block" style={{ color: "#ffffff" }}>Famille</span>
          <motion.span
            className="block sunset-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              background: "linear-gradient(135deg, #FF6B35, #F7C948)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Moula
          </motion.span>
        </motion.h1>

        {/* Sous-titre */}
        <p
          className="mt-6 text-[16px] tracking-[6px] uppercase"
          style={{ color: "#FF2D78", fontFamily: "'Permanent Marker', cursive" }}
        >
          Welcome to Paris
        </p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-5 text-base md:text-lg max-w-[480px] leading-relaxed"
          style={{ color: "rgba(245, 240, 235, 0.5)" }}
        >
          La Famille Moula domine les rues de Paris. Chaque membre porte une histoire,
          un r&ecirc;ve, une ambition. Soumets ta candidature et rejoins l&apos;empire.
        </motion.p>

        {/* Boutons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/rejoindre"
            className="btn-clip-left inline-flex items-center gap-2.5 px-9 py-4 font-heading text-[15px] tracking-[3px] uppercase no-underline transition-all duration-300 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #FF6B35, #F7C948)",
              color: "#000000",
            }}
          >
            Rejoindre la famille
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="/membres"
            className="btn-clip-right inline-flex items-center gap-2.5 px-9 py-4 font-heading text-[15px] tracking-[3px] uppercase no-underline transition-all duration-300"
            style={{
              background: "transparent",
              color: "#FF6B35",
              border: "1px solid #FF6B35",
            }}
          >
            Les membres
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-12 z-20 flex flex-col items-center gap-2"
      >
        <span
          className="font-heading text-[10px] tracking-[4px]"
          style={{ color: "rgba(255, 107, 53, 0.5)", writingMode: "vertical-rl" }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "#FF6B35",
            transformOrigin: "top",
          }}
        />
      </motion.div>

      {/* Keyframe pour le dot GPS */}
      <style jsx>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(255, 107, 53, 0); }
        }
      `}</style>
    </section>
  );
}
