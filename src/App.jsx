import Hero from "../src/components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesCanvas from "./components/Particles.jsx";
import Skills from "./components/Skills";
import Work from "./components/Work.jsx";

function App() {
  return (
    <>
      <div className="relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Hero />
          <Navbar />
          {/* <Skills /> */}
          <Work />
          <Projects />
          <Contact />
          <Footer />
          <ParticlesCanvas />
        </div>
      </div>
    </>
  );
}

export default App;
