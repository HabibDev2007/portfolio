import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { DEFAULT_LANG, LANGUAGES, type Lang } from './config'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return DEFAULT_LANG
    const stored = window.localStorage.getItem('lang') as Lang | null
    if (stored && LANGUAGES.some((l) => l.code === stored)) return stored
    return DEFAULT_LANG
  })

  const dir = LANGUAGES.find((l) => l.code === lang)?.dir ?? 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    window.localStorage.setItem('lang', lang)
  }, [lang, dir])

  return <LanguageContext.Provider value={{ lang, setLang, dir }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
