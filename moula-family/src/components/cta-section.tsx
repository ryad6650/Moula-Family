"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 editorial-padding relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ background: "rgba(255, 107, 53, 0.08)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl">
        <span className="font-heading text-[12px] tracking-[4px] uppercase block mb-4" style={{ color: "#F7C948" }}>
          04 — CANDIDATURE
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl tracking-wider uppercase"
        >
          T&apos;AS CE QU&apos;IL FAUT ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg max-w-lg mb-10 mt-6"
          style={{ color: "rgba(245, 240, 235, 0.5)" }}
        >
          On cherche des gens motivés, créatifs et prêts à tout donner sous le ciel de Paris.
          Si c&apos;est toi, candidature en bas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/rejoindre"
            className="btn-clip-left group inline-flex items-center gap-3 px-10 py-5 font-heading font-bold uppercase tracking-widest text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #FF6B35, #F7C948)",
              color: "#0A0A12",
            }}
          >
            Envoyer ma candidature
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
