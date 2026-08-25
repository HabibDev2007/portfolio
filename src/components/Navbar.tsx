import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useActiveSection } from '../hooks/useActiveSection'
import { profile } from '../data/profile'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <nav
        className={`mt-4 flex w-full max-w-5xl items-center justify-between rounded-2xl border border-line/10 bg-surface/70 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'px-4 py-2 shadow-lg shadow-black/10' : 'px-5 py-3'
        }`}
      >
        <button
          onClick={() => goTo('home')}
          data-cursor-hover
          className="mono-label flex items-center gap-2 text-sm font-medium"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-signal/30 text-signal">
            AH
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => goTo(item.id)}
                data-cursor-hover
                className={`mono-label rounded-full px-3 py-1.5 text-xs transition-colors ${
                  active === item.id
                    ? 'bg-signal/10 text-signal'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            data-cursor-hover
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line/10 lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-4 top-20 z-40 rounded-2xl border border-line/10 bg-surface/95 p-3 backdrop-blur-xl lg:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`mono-label block w-full rounded-lg px-3 py-2.5 text-left text-sm ${
                  active === item.id ? 'bg-signal/10 text-signal' : 'text-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
