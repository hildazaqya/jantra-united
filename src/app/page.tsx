import { Gallery } from "@/components/Home/Gallery";
import { Hero } from "@/components/Home/Hero";
import { OurPartner } from "@/components/Home/OurPartner";
import { Overview } from "@/components/Home/Overview";

export default function Home() {
  return (
    <main className="flex flex-col bg-dark">
      <Hero />
      <Overview />
      <Gallery />
      <OurPartner />
    </main>
  );
}
