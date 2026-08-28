// ─────────────────────────────────────────────────────────────
// LANGUAGE CONFIG — supported languages and shared types.
// To add another language later: add it to `Lang` and `LANGUAGES`,
// then add a column for it everywhere `L(...)` is used in ui.ts
// and content.ts.
// ─────────────────────────────────────────────────────────────

export type Lang = 'en' | 'ru' | 'tg' | 'ar'

export interface LanguageMeta {
  code: Lang
  label: string // shown in the language switcher
  dir: 'ltr' | 'rtl'
}

export const LANGUAGES: LanguageMeta[] = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'ru', label: 'RU', dir: 'ltr' },
  { code: 'tg', label: 'TG', dir: 'ltr' },
  { code: 'ar', label: 'AR', dir: 'rtl' },
]

export const DEFAULT_LANG: Lang = 'en'

/** A piece of text with a translation for every supported language. */
export type LocalizedText = Record<Lang, string>

/** Shorthand for defining a LocalizedText: L(english, russian, tajik, arabic) */
export const L = (en: string, ru: string, tg: string, ar: string): LocalizedText => ({ en, ru, tg, ar })
