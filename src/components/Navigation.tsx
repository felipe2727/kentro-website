"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 md:px-10 h-14">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("philosophy")}
              className="font-[family-name:var(--font-syne)] text-[0.7rem] font-bold tracking-[0.12em] uppercase text-white hover:opacity-60 transition-opacity"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("collection")}
              className="font-[family-name:var(--font-syne)] text-[0.7rem] font-bold tracking-[0.12em] uppercase text-white hover:opacity-60 transition-opacity"
            >
              Journal
            </button>
          </div>

          {/* Center brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
          >
            <span className="inline-block w-[10px] h-[10px] bg-white" />
            <span className="font-[family-name:var(--font-syne)] text-[0.8rem] font-bold tracking-[0.2em] text-white">
              KENTRO
            </span>
          </button>

          {/* Right */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("waitlist")}
              className="font-[family-name:var(--font-syne)] text-[0.7rem] font-bold tracking-[0.12em] uppercase text-white hover:opacity-60 transition-opacity"
            >
              Waitlist
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] ml-auto"
            aria-label="Menu"
          >
            <span className="block w-5 h-[1.5px] bg-white" />
            <span className="block w-5 h-[1.5px] bg-white" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col items-center justify-center gap-10"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 text-canvas font-[family-name:var(--font-syne)] text-sm"
            >
              Close
            </button>
            {[
              { label: "About", id: "philosophy" },
              { label: "Journal", id: "collection" },
              { label: "Waitlist", id: "waitlist" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-[family-name:var(--font-syne)] text-2xl font-extrabold tracking-tight uppercase text-canvas"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
