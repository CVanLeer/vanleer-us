import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AIReadiness } from "@/components/AIReadiness";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Timeline } from "@/components/Timeline";
import { Process } from "@/components/Process";
import { Partnership } from "@/components/Partnership";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCard } from "@/components/FloatingCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 space-y-8 md:space-y-12 pb-8 md:pb-12">
        <FloatingCard parallaxSpeed={0.02} tilt={false}>
          <Hero />
        </FloatingCard>
        <FloatingCard id="readiness" parallaxSpeed={0.025}>
          <AIReadiness />
        </FloatingCard>
        <FloatingCard variant="dark" parallaxSpeed={0.03}>
          <Stats />
        </FloatingCard>
        <FloatingCard id="services" parallaxSpeed={0.02}>
          <Services />
        </FloatingCard>
        <FloatingCard parallaxSpeed={0.035}>
          <Timeline />
        </FloatingCard>
        <FloatingCard id="process" parallaxSpeed={0.025}>
          <Process />
        </FloatingCard>
        <FloatingCard parallaxSpeed={0.03}>
          <Partnership />
        </FloatingCard>
        <FloatingCard id="about" parallaxSpeed={0.02}>
          <About />
        </FloatingCard>
        <FloatingCard parallaxSpeed={0.035}>
          <Testimonials />
        </FloatingCard>
        <FloatingCard id="contact" variant="dark" parallaxSpeed={0.025}>
          <Contact />
        </FloatingCard>
      </main>
      <Footer />
    </>
  );
}
