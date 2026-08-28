import { GraduationCap, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { education } from '../data/education'
import { useT } from '../i18n/useT'
import { ui } from '../i18n/ui'
import { educationText } from '../i18n/content'

export default function Education() {
  const { t } = useT()
  return (
    <section id="education" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" label={t(ui.education.eyebrow)} title={t(ui.education.title)} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((entry, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bracket-card group h-full rounded-xl p-7 transition-colors hover:border-signal/20">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-signal/10 text-signal">
                  <GraduationCap size={20} />
                </div>
                <p className="mono-label text-xs text-signal">{entry.years}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{entry.institution}</h3>
                <p className="mt-1 text-sm text-muted">{t(educationText[i]?.degree, entry.degree)}</p>
                <p className="mt-4 flex items-center gap-1.5 text-xs text-muted">
                  <MapPin size={13} /> {entry.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {t(educationText[i]?.description, entry.description)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
