"use client";

export default function Colophon() {
  return (
    <footer className="relative bg-ink py-20 px-6 text-center">
      {/* Accent dot */}
      <div className="w-2 h-2 rounded-full bg-accent mx-auto" />

      {/* Brand */}
      <p className="font-[family-name:var(--font-syne)] font-bold text-[0.85rem] tracking-[0.3em] text-canvas mt-8">
        KENTRO
      </p>
      <p className="font-[family-name:var(--font-syne)] text-[0.7rem] text-stone mt-1">
        &#954;&#941;&#957;&#964;&#961;&#959;
      </p>

      {/* Links */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-syne)] font-bold text-[0.6rem] tracking-[0.15em] uppercase text-ghost hover:text-canvas transition-colors"
        >
          Instagram
        </a>
        <span className="text-ghost text-[0.5rem]">&middot;</span>
        <a
          href="mailto:hello@kentro.com"
          className="font-[family-name:var(--font-syne)] font-bold text-[0.6rem] tracking-[0.15em] uppercase text-ghost hover:text-canvas transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Copyright */}
      <p className="font-[family-name:var(--font-syne)] text-[0.55rem] text-stone mt-10">
        &copy; 2026 Kentro. All rights reserved.
      </p>
    </footer>
  );
}
