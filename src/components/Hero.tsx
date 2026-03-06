"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Main composition container */}
      <div className="relative w-full max-w-[1400px] mx-auto flex items-center justify-center min-h-[85vh]">
        {/* KENTRO - single continuous word, behind the image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute z-[1] select-none whitespace-nowrap pointer-events-none"
        >
          <span
            className="font-[family-name:var(--font-syne)] font-extrabold uppercase text-ink block"
            style={{
              fontSize: "clamp(3.5rem, 15vw, 14rem)",
              letterSpacing: "-0.03em",
              lineHeight: 0.85,
            }}
          >
            KÉNTRO
          </span>
        </motion.div>

        {/* Center image - sits ON TOP of the text, creating the negative/clip effect */}
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.97 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-[2] w-[55vw] md:w-[28vw] max-w-[400px]"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/editorial/back-turn-logotype.png"
              alt="KENTRO Editorial"
              fill
              className="object-cover editorial-img"
              priority
              sizes="(max-width: 768px) 55vw, 28vw"
              quality={100}
            />
          </div>
        </motion.div>

        {/* KENTRO repeated - in front of image for the overlapping pass-through effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute z-[3] select-none whitespace-nowrap pointer-events-none"
          style={{
            WebkitTextStroke: "1px var(--ink)",
            color: "transparent",
          }}
        >
          <span
            className="font-[family-name:var(--font-syne)] font-extrabold uppercase block"
            style={{
              fontSize: "clamp(3.5rem, 15vw, 14rem)",
              letterSpacing: "-0.03em",
              lineHeight: 0.85,
            }}
          >
            KÉNTRO
          </span>
        </motion.div>
      </div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 text-center mt-4 md:mt-8"
      >
        <p
          className="font-[family-name:var(--font-instrument)] italic text-ink"
          style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
        >
          Ground Zero
        </p>
        <p className="font-[family-name:var(--font-syne)] font-bold text-stone text-[0.55rem] tracking-[0.2em] uppercase mt-2">
          Collection 001 — Spring 2026
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-stone/50"
        />
      </motion.div>
    </section>
  );
}
