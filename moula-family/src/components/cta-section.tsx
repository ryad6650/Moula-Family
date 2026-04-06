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
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <span className="font-mono text-[11px] tracking-[3px] text-gold/80 block mb-4">
          04 — CANDIDATURE
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl tracking-wider mb-6"
        >
          T&apos;AS CE QU&apos;IL FAUT ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blanc/40 text-lg max-w-lg mb-10"
        >
          On cherche des gens motivés, créatifs et prêts à tout donner.
          Si c&apos;est toi, candidature en bas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/rejoindre"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-noir font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] transition-all duration-300"
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
