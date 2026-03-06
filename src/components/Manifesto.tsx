"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="relative py-[120px] md:py-[200px] px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-[800px] mx-auto text-center"
      >
        <p
          className="font-[family-name:var(--font-instrument)] italic text-ink leading-[1.5]"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
        >
          &ldquo;Luxury is not a price point,
          <br />
          but a narrative-driven
          <br />
          state of permanence.&rdquo;
        </p>

        {/* Center Point dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.4,
            type: "spring",
            stiffness: 200,
          }}
          className="mt-12 mx-auto w-2 h-2 rounded-full bg-accent"
        />
      </motion.div>
    </section>
  );
}
