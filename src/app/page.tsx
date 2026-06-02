import { Hero } from "@/components/home/Hero";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { MissionVision } from "@/components/site/MissionVision";
import { Segments } from "@/components/home/Segments";
import { Stats } from "@/components/home/Stats";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <MissionVision bg="bg-ink-soft" />
      <Segments />
      <Stats />
      <ServicesIndex />
      <ContactCTA />
    </>
  );
}
