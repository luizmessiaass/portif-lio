import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
