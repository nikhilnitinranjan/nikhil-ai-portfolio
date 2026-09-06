import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Research from "./Components/Research";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Certifications from "./Components/Certifications";
import Background3D from "./Components/Background3D";

function App() {
  return (
    <>
      <Background3D />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default App;