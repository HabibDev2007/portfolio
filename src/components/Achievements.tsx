import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Eye } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import CertificateModal from './CertificateModal'
import { certificates, certificateCategories, type Certificate } from '../data/certificates'
import { useT } from '../i18n/useT'
import { ui } from '../i18n/ui'
import { certificatesText } from '../i18n/content'

export default function Achievements() {
  const { t } = useT()
  const [filter, setFilter] = useState<(typeof certificateCategories)[number]>('All')
  const [active, setActive] = useState<{ cert: Certificate; index: number } | null>(null)

  // Keep each certificate's original index (for looking up its translation)
  // before filtering, so translations stay attached to the right item.
  const withIndex = useMemo(() => certificates.map((cert, index) => ({ cert, index })), [])

  const filtered = useMemo(
    () => (filter === 'All' ? withIndex : withIndex.filter(({ cert }) => cert.category === filter)),
    [filter, withIndex]
  )

  return (
    <section id="achievements" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          label={t(ui.achievements.eyebrow)}
          title={t(ui.achievements.title)}
          description={t(ui.achievements.subtitle)}
        />

        <Reveal className="mb-10 flex flex-wrap gap-2">
          {certificateCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-cursor-hover
              className={`mono-label rounded-full border px-4 py-1.5 text-xs transition-colors ${
                filter === cat
                  ? 'border-signal/50 bg-signal/10 text-signal'
                  : 'border-line/10 text-muted hover:border-line/25 hover:text-ink'
              }`}
            >
              {t(ui.categories[cat], cat)}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ cert, index }, i) => (
            <motion.div
              layout
              key={cert.title + index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            >
              <button
                onClick={() => setActive({ cert, index })}
                data-cursor-hover
                className="bracket-card group w-full rounded-xl p-6 text-left transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber/10 text-amber">
                    <Award size={18} />
                  </div>
                  <span className="mono-label text-[11px] text-muted">{cert.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {t(certificatesText[index]?.title, cert.title)}
                </h3>
                <p className="mt-1 text-sm text-muted">{cert.organization}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
                  {t(certificatesText[index]?.description, cert.description)}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-signal opacity-0 transition-opacity group-hover:opacity-100">
                  <Eye size={13} /> {t(ui.achievements.viewCertificate)}
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CertificateModal
        certificate={active?.cert ?? null}
        translation={active ? certificatesText[active.index] : undefined}
        onClose={() => setActive(null)}
      />
    </section>
  )
}
