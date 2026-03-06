"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative px-6 md:px-10 pb-20 md:pb-40">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full md:w-[50%] -mt-0 md:-mt-20"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/campaign/courtyard-tree.png"
                alt="Architectural Restraint"
                fill
                className="object-cover editorial-img"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
              />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full md:w-[40%] md:pt-20"
          >
            <h2
              className="font-[family-name:var(--font-syne)] font-extrabold uppercase text-ink tracking-tight break-words"
              style={{ fontSize: "clamp(1.6rem, 8vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Architectural
              <br />
              Restraint
            </h2>

            <p
              className="font-[family-name:var(--font-instrument)] italic text-stone mt-8 max-w-[400px] leading-[1.8]"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)" }}
            >
              Our philosophy is grounded in structural minimalism. Every piece is
              a foundational element, designed with pure geometric intention and
              void of unnecessary ornamentation. Heritage craftsmanship meets
              subcultural agility — not through compromise, but through
              precision.
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-ghost mt-12 mb-8" />

            {/* Keywords */}
            <div className="flex gap-12">
              <div>
                <p className="font-[family-name:var(--font-syne)] font-bold text-[0.85rem] text-ink">
                  Foundation
                </p>
                <p className="font-[family-name:var(--font-instrument)] italic text-[0.85rem] text-stone mt-1">
                  The beginning of all form.
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-syne)] font-bold text-[0.85rem] text-ink">
                  Structure
                </p>
                <p className="font-[family-name:var(--font-instrument)] italic text-[0.85rem] text-stone mt-1">
                  The shape of what&apos;s to come.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
