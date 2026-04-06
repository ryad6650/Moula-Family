import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { DiscordSection } from "@/components/discord-section";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <DiscordSection />
      <CtaSection />
    </>
  );
}
