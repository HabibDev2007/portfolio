import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      data-cursor-hover
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line/10 bg-surface/60 text-ink transition-colors hover:border-signal/40 hover:text-signal"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
