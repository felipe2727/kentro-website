import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Philosophy from "@/components/Philosophy";
import Collection from "@/components/Collection";
import Waitlist from "@/components/Waitlist";
import Colophon from "@/components/Colophon";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Manifesto />
      <Philosophy />
      <Collection />
      <Waitlist />
      <Colophon />
    </main>
  );
}
