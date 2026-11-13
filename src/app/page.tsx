import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { About, Faq, Footer, Packages, Process, Services, TrustStrip, Work } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <Work />
        <Packages />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
