import { useLanguage } from './LanguageContext'
import { ui } from './ui'
import type { LocalizedText } from './config'

/**
 * useT() → t(obj) resolves any LocalizedText object (from ui.ts or
 * content.ts) to a plain string in the current language.
 *
 * Example: t(ui.nav.home) → "Home" | "Главная" | "Асосӣ" | "الرئيسية"
 */
export function useT() {
  const { lang } = useLanguage()
  const t = (text: LocalizedText | undefined, fallback = ''): string => (text ? text[lang] : fallback)
  return { t, lang }
}
