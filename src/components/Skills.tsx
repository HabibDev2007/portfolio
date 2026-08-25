import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          label="skills"
          title="What I work with"
          description="Tools and technologies I've used and continue to build with — no exaggerated levels, just what's real."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="bracket-card h-full rounded-xl p-6">
                <p className="mono-label mb-4 text-xs text-signal">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      data-cursor-hover
                      className="mono-label rounded-lg border border-line/10 bg-surface2 px-3 py-1.5 text-xs transition-colors hover:border-signal/40 hover:text-signal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
