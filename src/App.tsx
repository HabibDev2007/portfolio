import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import Experience from './components/Experience'
import Goals from './components/Goals'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

// Small easter egg: press "g" then "h" to jump back to the top.
function useGoHomeShortcut() {
  const lastKey = useRef<string | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return

      if (lastKey.current === 'g' && e.key === 'h') {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
        lastKey.current = null
        return
      }
      lastKey.current = e.key
      window.setTimeout(() => (lastKey.current = null), 600)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])
}

function App() {
  useGoHomeShortcut()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-ink transition-colors">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Achievements />
        <Projects />
        <Skills />
        <Gallery />
        <Experience />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
