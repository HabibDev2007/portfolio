import { Briefcase } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { experience } from '../data/experience'
import { useT } from '../i18n/useT'
import { ui } from '../i18n/ui'
import { experienceText } from '../i18n/content'

export default function Experience() {
  const { t } = useT()
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading index="07" label={t(ui.experience.eyebrow)} title={t(ui.experience.title)} />

        <div className="relative space-y-10 border-l border-line/10 pl-8">
          {experience.map((exp, i) => (
            <Reveal key={i} delay={i * 0.1} className="relative">
              <span className="bracket-card absolute -left-[41px] flex h-7 w-7 items-center justify-center rounded-lg text-signal">
                <Briefcase size={13} />
              </span>
              <p className="mono-label text-xs text-signal">{exp.dates}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">
                {t(experienceText[i]?.position, exp.position)}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {exp.organization} · {exp.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{exp.description}</p>

              {exp.responsibilities.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {r}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="mono-label rounded-md border border-line/10 px-2 py-1 text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
