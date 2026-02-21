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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AIReadiness />
        <Stats />
        <Services />
        <Timeline />
        <Process />
        <Partnership />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
