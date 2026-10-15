// src/App.jsx
import { MotionConfig } from "framer-motion"
import About from "./components/About"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import CustomCursor from "./components/CustomCursor"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"

const App = () => {
  return (
    // reducedMotion: işletim sisteminde "hareketi azalt" açıksa animasyonları kısar
    <MotionConfig reducedMotion="user">
      {/* Arka plan: ışık lekeleri + ince grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="bg-grid absolute inset-0" />
      </div>

      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
