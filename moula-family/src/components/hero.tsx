"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#050507" }}
      suppressHydrationWarning
    >
      {/* Grille GTA en fond */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Lignes horizontales décoratives */}
      <div
        className="absolute top-[20%] left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,45,120,0.1), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[80%] left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,45,120,0.1), transparent)" }}
        aria-hidden="true"
      />

      {/* Watermark MOULA en arrière-plan — très subtil */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-heading whitespace-nowrap"
          style={{ fontSize: "30vw", opacity: 0.035, color: "#ffffff" }}
        >
          MOULA
        </span>
      </div>

      {/* Contenu principal — centré */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo LGP */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <Image
            src="/logo-lgp.png"
            alt="Le Grand Paname"
            width={100}
            height={100}
            priority
            style={{ width: "100px", height: "auto" }}
          />
        </motion.div>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span
            className="inline-block px-4 py-1.5 font-mono text-[11px] tracking-[4px] mb-8"
            style={{
              border: "1px solid rgba(255,45,120,0.2)",
              color: "rgba(255,45,120,0.8)",
            }}
          >
            GTA RP — LE GRAND PANAME
          </span>
        </motion.div>

        {/* Titre principal avec glow */}
        <motion.h1
          initial={{ opacity: 1, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading leading-[0.85] tracking-wider"
          style={{
            fontSize: "clamp(70px, 14vw, 200px)",
            color: "#F0EFF4",
            fontFamily: "'Bebas Neue', sans-serif",
          }}
        >
          <span className="block">FAMILLE</span>
          <motion.span
            className="block neon-glow"
            initial={{ opacity: 1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ color: "#FF2D78" }}
          >
            MOULA
          </motion.span>
        </motion.h1>

        {/* Sous-titre */}
        <p
          className="mt-4 font-mono text-[12px] tracking-[4px] uppercase"
          style={{ color: "rgba(255,45,120,0.6)" }}
        >
          Une famille — Une histoire — Un empire
        </p>

        {/* Ligne décorative sous le titre */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 h-px w-32"
          style={{
            background: "linear-gradient(90deg, transparent, #FF2D78, transparent)",
            transformOrigin: "center",
          }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 text-base md:text-lg max-w-[440px] leading-relaxed"
          style={{ color: "rgba(240,239,244,0.4)" }}
        >
          La Famille Moula recrute. Chaque membre porte une histoire,
          une identité, un personnage unique. Soumets ta candidature et
          rejoins-nous.
        </motion.p>

        {/* Boutons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">

          <a
            href="/rejoindre"
            className="cursor-pointer uppercase neon-box-glow"
            style={{
              backgroundColor: "#FF2D78",
              color: "#000000",
              fontFamily: "'Bebas Neue', sans-serif",
              border: "none",
              padding: "16px 32px",
              borderRadius: 0,
              fontSize: "18px",
              letterSpacing: "3px",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Rejoindre la famille
          </a>
          <a
            href="/membres"
            className="cursor-pointer uppercase"
            style={{
              backgroundColor: "transparent",
              color: "#FF2D78",
              fontFamily: "'Bebas Neue', sans-serif",
              border: "1px solid #FF2D78",
              padding: "16px 32px",
              borderRadius: 0,
              fontSize: "18px",
              letterSpacing: "3px",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Les membres
          </a>
        </div>
      </div>

      {/* Coins décoratifs style GTA */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-neon/20 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-neon/20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-neon/20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-neon/20 pointer-events-none" aria-hidden="true" />

      {/* Ligne de séparation bas */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,45,120,0.3), transparent)" }}
      />

      {/* Scroll indicator — centré */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex flex-col items-center gap-2"
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)" }}
      >
        <span className="font-mono text-[10px] tracking-[4px] text-neon/40">
          SCROLL
        </span>
        <motion.div
          animate={{ scaleY: [0, 1] }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
          style={{
            width: "1px",
            height: "30px",
            backgroundColor: "rgba(255,45,120,0.4)",
            transformOrigin: "top",
          }}
        />
      </motion.div>
    </section>
  );
}
