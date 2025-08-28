// src/App.jsx
import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import CustomCursor from "./components/CustomCursor"
import Portfolio from "./components/Portfolio"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CustomCursor/>
      <About />
     
      
     
    </div>
  )
}

export default App