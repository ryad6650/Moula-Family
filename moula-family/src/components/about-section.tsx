"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Video, Flame } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Un collectif soudé",
    description:
      "Famille Moula, c'est avant tout une équipe. On avance ensemble, on se soutient, on grandit.",
  },
  {
    icon: Video,
    title: "Du contenu qui claque",
    description:
      "TikTok, lives, montages — on crée du contenu authentique qui parle à notre communauté.",
  },
  {
    icon: Flame,
    title: "L'ambition sans limite",
    description:
      "On vise le sommet. Chaque jour, on bosse pour faire grandir la famille et repousser les limites.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 editorial-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-noir via-noir-light/30 to-noir pointer-events-none" />

      <div className="relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-[11px] tracking-[3px] text-gold/80 block mb-4">
            02 — IDENTITÉ
          </span>
          <h2 className="font-heading text-5xl md:text-6xl tracking-wider">
            PLUS QU&apos;UN COLLECTIF
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative p-8 bg-noir-light/50 border border-white/5 hover:border-gold/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <feature.icon className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-2xl tracking-wider mb-3">
                  {feature.title.toUpperCase()}
                </h3>
                <p className="text-blanc/40 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
