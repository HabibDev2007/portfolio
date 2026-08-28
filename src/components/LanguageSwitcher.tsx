import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { LANGUAGES } from '../i18n/config'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        data-cursor-hover
        className="mono-label flex h-9 items-center gap-1.5 rounded-full border border-line/10 bg-surface/60 px-3 text-xs text-ink transition-colors hover:border-signal/40 hover:text-signal"
      >
        <Globe size={14} />
        {lang.toUpperCase()}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop to close on outside click */}
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute end-0 top-11 z-50 min-w-[120px] overflow-hidden rounded-xl border border-line/10 bg-surface/95 p-1 shadow-xl backdrop-blur-xl"
            >
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code)
                    setOpen(false)
                  }}
                  className={`mono-label flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                    lang === l.code ? 'bg-signal/10 text-signal' : 'text-muted hover:bg-surface2 hover:text-ink'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
