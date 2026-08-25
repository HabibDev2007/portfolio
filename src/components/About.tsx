import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { bio, profile } from '../data/profile'
import { timeline } from '../data/timeline'

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          label="about"
          title="Who I am"
          description={`A short introduction, in my own words — based in ${profile.location}.`}
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-5">
            {bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="mono-label pt-2 text-sm text-signal">"{profile.motto}"</p>
            </Reveal>
          </div>

          <div className="relative pl-6">
            <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-line/10" />
            <div className="space-y-8">
              {timeline.map((entry, i) => (
                <Reveal key={i} delay={i * 0.06} className="relative">
                  <span className="absolute -left-6 top-1 h-3 w-3 rounded-full border-2 border-signal bg-bg" />
                  <p className="mono-label text-xs text-signal">{entry.year}</p>
                  <h3 className="mt-1 font-display text-lg font-medium">{entry.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{entry.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
