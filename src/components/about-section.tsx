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
      "Famille Moula, c'est avant tout une équipe. On avance ensemble, on se soutient, on grandit dans les rues de Paris.",
  },
  {
    icon: Video,
    title: "Du contenu qui claque",
    description:
      "TikTok, lives, montages — on crée du contenu authentique sous le ciel de Paris.",
  },
  {
    icon: Flame,
    title: "L'ambition sans limite",
    description:
      "On vise le sommet de Paris. Chaque jour on bosse pour faire grandir la famille et repousser les limites.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 editorial-padding relative" ref={ref}>
      {/* Top border */}
      <div
        className="absolute top-0 left-16 right-16 h-px"
        style={{ background: "linear-gradient(90deg, #FF6B35, transparent)" }}
      />

      <div className="relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-heading text-[12px] tracking-[4px] uppercase block mb-4" style={{ color: "#F7C948" }}>
            02 — IDENTITÉ
          </span>
          <h2 className="font-heading text-5xl md:text-6xl tracking-wider uppercase">
            PLUS QU&apos;UN COLLECTIF
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative p-10 transition-all duration-400 overflow-hidden"
              style={{
                background: "#12121E",
                border: "1px solid rgba(255, 107, 53, 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 107, 53, 0.2)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 107, 53, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] transition-transform duration-400 origin-left scale-x-0 group-hover:scale-x-100"
                style={{ background: "linear-gradient(90deg, #FF6B35, #F7C948)" }}
              />
              <div className="relative z-10">
                <feature.icon className="w-8 h-8 mb-6" strokeWidth={1.5} style={{ color: "#FF6B35" }} />
                <h3 className="font-heading text-xl tracking-[2px] mb-3 uppercase">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245, 240, 235, 0.5)" }}>
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
