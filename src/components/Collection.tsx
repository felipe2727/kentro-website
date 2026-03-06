"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface StoryBlock {
  image: string;
  imageAlt: string;
  names: string;
  tier: string;
  narrative: string;
}

const stories: StoryBlock[] = [
  {
    image: "/campaign/alpine-overcoat.jpg",
    imageAlt: "The Weight - Mainline Outerwear",
    names: "The Monolith Overcoat\n& The Cantilever Bomber",
    tier: "Mainline — Ground Zero",
    narrative:
      "Two expressions of protection. The Monolith — a floor-length double-breasted overcoat in heavyweight Italian wool, raw-hemmed and numbered. The Cantilever — a cropped MA-1 in matte nappa leather with gunmetal hardware. One envelops. The other exposes. Both built to outlast the season that birthed them.",
  },
  {
    image: "/campaign/industrial-beams.jpg",
    imageAlt: "The Foundation - Core Essentials",
    names: "The Framework Hoodie\n& The Datum Tee",
    tier: "Core — Ground Zero",
    narrative:
      "The bones of a wardrobe stripped to its structural minimum. A 450-gram fleece hoodie with flatlock seams. A washed-black tee with a raw-cut hem that curls with wear. A windowpane flannel in earth tones that softens industrial silhouettes. A bone-white track jacket that moves between the gym and the gallery without apology. These are not basics — they are foundations.",
  },
  {
    image: "/campaign/kitchen-knit.jpg",
    imageAlt: "The Ground - Bottoms & Knitwear",
    names: "The Plinth Knit Sweater\n& The Terraform Denim",
    tier: "Core — Ground Zero",
    narrative:
      "From the waist down, geometry. The Slab — wide-leg cargos with magnetic-snap squared pockets and quilted knee panels. The Terraform — super-wide raw selvedge in 15oz Japanese denim, rigid and unforgiving, built to break in over years. Above, the Plinth knit in merino-cashmere with an asymmetric snap placket. And at the hip, a brushed steel keychain engraved with a single dot. The center point.",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="relative px-6 md:px-10 py-20 md:py-32">
      {/* Section title - large editorial style */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1200px] mx-auto mb-20 md:mb-32"
      >
        <h2
          className="font-[family-name:var(--font-syne)] font-extrabold uppercase text-ink tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
        >
          The Collection
        </h2>
        <p className="font-[family-name:var(--font-instrument)] italic text-stone mt-4" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>
          Ten garments. Three stories. One point of origin.
        </p>
      </motion.div>

      {/* Story Blocks */}
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[120px] md:gap-[160px]">
        {stories.map((story, i) => (
          <div key={i}>
            {/* Large editorial image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[16/9] md:aspect-[2.2/1] overflow-hidden"
            >
              <Image
                src={story.image}
                alt={story.imageAlt}
                fill
                className="object-cover editorial-img"
                sizes="100vw"
              />
            </motion.div>

            {/* Text block below image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 md:mt-12 flex flex-col md:flex-row gap-6 md:gap-16"
            >
              {/* Left - names */}
              <div className="md:w-[35%]">
                <h3
                  className="font-[family-name:var(--font-syne)] font-bold uppercase tracking-[0.08em] text-ink whitespace-pre-line"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
                >
                  {story.names}
                </h3>
                <p className="font-[family-name:var(--font-syne)] font-bold text-[0.55rem] tracking-[0.2em] uppercase text-stone mt-3">
                  {story.tier}
                </p>
              </div>

              {/* Right - narrative */}
              <div className="md:w-[55%]">
                <p
                  className="font-[family-name:var(--font-instrument)] italic text-stone leading-[1.8] max-w-[480px]"
                  style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)" }}
                >
                  {story.narrative}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
