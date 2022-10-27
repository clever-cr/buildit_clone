/* eslint-disable @next/next/no-img-element */
import NavBar from "../components/Common/NavBar";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Socials from "../components/Home/Socials";
import Contact from "../components/Home/Contact";
import Partners from "../components/Home/Partners";
import Projects from "../components/Home/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Partners />
      <Projects />
      <Socials />
      <Contact />
    </>
  );
}
