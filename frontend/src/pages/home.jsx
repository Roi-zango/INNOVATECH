import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Founder from "../sections/Founder";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Founder />
      <Portfolio />
      <Contact />
    </>
  );
}