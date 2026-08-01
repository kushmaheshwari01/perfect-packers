import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Products />
      <WhyChooseUs />
      <Industries />
      <Process />
      --<Contact />
    </>
  );
}