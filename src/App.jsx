// src/App.jsx
import { useEffect } from "react"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import About from "./components/About"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import CustomCursor from "./components/CustomCursor"
import Portfolio from "./components/Portfolio"

const App = () => {
  useEffect(() =>{
    //register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    // refresh ScrollTrigger when the pages is fully loaded
    ScrollTrigger.refresh()
    // clean up ScrollTrigger on component unmount

  return ()=> {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }
  },  [])
  return (
    <div>
      <Navbar />
      <Hero />
      <CustomCursor/>
      <About />
      <Skills/>
     <Portfolio/>
     <Contact/>
      
     
    </div>
  )
}

export default App