import { Github, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { social } from '../data/profile'
import { useT } from '../i18n/useT'
import { ui } from '../i18n/ui'

const links = [
  { href: social.github, icon: Github, label: 'GitHub' },
  { href: social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: social.instagram, icon: Instagram, label: 'Instagram' },
]

export default function Contact() {
  const { t } = useT()
  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          index="09"
          label={t(ui.contact.eyebrow)}
          title={t(ui.contact.title)}
          description={t(ui.contact.subtitle)}
        />

        <Reveal delay={0.1}>
          <a
            href={`mailto:${social.email}`}
            data-cursor-hover
            className="group inline-flex items-center gap-3 rounded-full bg-signal px-8 py-4 text-base font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            <Mail size={18} />
            {social.email}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex justify-center gap-3">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              data-cursor-hover
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line/10 text-muted transition-colors hover:border-signal/40 hover:text-signal"
            >
              <Icon size={18} />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
