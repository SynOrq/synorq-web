import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import UseCases from "@/components/UseCases";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <HowItWorks />
        <Solutions />
        <UseCases />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
