import Hero from "../src/components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Hero />
          <Navbar />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
