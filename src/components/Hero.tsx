import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Instagram, Mail, User } from 'lucide-react'
import { profile, social } from '../data/profile'
import { useT } from '../i18n/useT'
import { ui } from '../i18n/ui'
import { profileText } from '../i18n/content'

const socialLinks = [
  { href: social.github, icon: Github, label: 'GitHub' },
  { href: social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: social.instagram, icon: Instagram, label: 'Instagram' },
  { href: `mailto:${social.email}`, icon: Mail, label: 'Email' },
]

export default function Hero() {
  const { t } = useT()
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-32">
      <div className="blueprint-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-signal/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mono-label mb-6 inline-flex items-center gap-2 rounded-full border border-line/10 bg-surface/60 px-3 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            {t(profileText.status, profile.status)}
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-display text-xl text-signal sm:text-2xl">{t(profileText.title, profile.title)}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t(profileText.tagline, profile.tagline)}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              data-cursor-hover
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
            >
              {t(ui.hero.viewJourney)}
            </button>
            <button
              data-cursor-hover
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-line/15 px-6 py-3 text-sm font-medium transition-colors hover:border-signal/40 hover:text-signal"
            >
              {t(ui.hero.viewProjects)}
            </button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                data-cursor-hover
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line/10 text-muted transition-colors hover:border-signal/40 hover:text-signal"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="animate-float">
            <div className="bracket-card relative w-[280px] overflow-hidden rounded-2xl shadow-2xl shadow-black/30 sm:w-[320px]">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="aspect-[4/5] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/5] w-full items-center justify-center bg-surface2 text-muted">
                  <User size={40} />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  )
}
