import Matter from "./bg-matter/Matter"
import Footer from "./components/Footer"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function App() {
  return (
    <div>
      <Matter />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App