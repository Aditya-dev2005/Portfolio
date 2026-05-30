import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import AIChatbot from "./components/AIChatbot";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <GitHub />
      <Contact />
      <AIChatbot />
    </main>
  );
}
