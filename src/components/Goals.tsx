import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { goals } from '../data/goals'
import { useT } from '../i18n/useT'
import { ui } from '../i18n/ui'
import { goalsText } from '../i18n/content'

export default function Goals() {
  const { t } = useT()
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="blueprint-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="mono-label mb-4 text-sm text-signal">// 08 — {t(ui.goals.eyebrow)}</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t(ui.goals.title)}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted sm:text-lg">{t(ui.goals.subtitle)}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {goals.map((goal, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex items-center gap-3 rounded-xl border border-line/10 bg-surface/40 px-5 py-4">
                <ArrowUpRight size={16} className="shrink-0 text-signal rtl:rotate-90" />
                <p className="text-sm text-ink sm:text-base">{t(goalsText[i], goal)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
