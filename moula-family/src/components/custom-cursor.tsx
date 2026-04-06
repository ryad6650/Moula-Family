"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const x = useSpring(0, { stiffness: 150, damping: 20 });
  const y = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const mobile = window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(mobile);
    if (mobile) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [x, y, visible]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9998]"
      style={{
        x,
        y,
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "#c9a84c",
        opacity: visible ? 1 : 0,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
