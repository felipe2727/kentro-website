"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="relative bg-ink py-[120px] md:py-[200px] px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0 }}
        className="max-w-[600px] mx-auto text-center"
      >
        <h2
          className="font-[family-name:var(--font-syne)] font-extrabold uppercase text-canvas tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
        >
          Ground Zero
          <br />
          Is Coming
        </h2>

        <p className="font-[family-name:var(--font-instrument)] italic text-ghost text-[1.1rem] mt-6">
          Spring 2026
        </p>

        {/* Email form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-14 max-w-[400px] mx-auto relative">
            <div className="flex items-center border-b border-ghost/40 focus-within:border-accent transition-colors">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 bg-transparent py-3 font-[family-name:var(--font-instrument)] italic text-canvas text-base outline-none placeholder:text-stone/60"
              />
              <button
                type="submit"
                className="text-canvas hover:text-accent transition-colors pl-4 py-3 text-xl"
                aria-label="Submit"
              >
                &rarr;
              </button>
            </div>
            <p className="font-[family-name:var(--font-instrument)] italic text-[0.85rem] text-stone mt-6">
              Be the first to access the collection.
            </p>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-14"
          >
            <p className="font-[family-name:var(--font-instrument)] italic text-canvas text-lg">
              You&apos;re on the list.
            </p>
            <p className="font-[family-name:var(--font-instrument)] italic text-stone text-[0.85rem] mt-2">
              We&apos;ll be in touch.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
