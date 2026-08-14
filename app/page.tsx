import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import Lately from "./components/Lately";



export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Lately />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
