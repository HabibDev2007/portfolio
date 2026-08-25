import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Eye } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import CertificateModal from './CertificateModal'
import { certificates, certificateCategories, type Certificate } from '../data/certificates'

export default function Achievements() {
  const [filter, setFilter] = useState<(typeof certificateCategories)[number]>('All')
  const [active, setActive] = useState<Certificate | null>(null)

  const filtered = useMemo(
    () => (filter === 'All' ? certificates : certificates.filter((c) => c.category === filter)),
    [filter]
  )

  return (
    <section id="achievements" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          label="achievements"
          title="Certificates & achievements"
          description="A growing collection of certificates, courses, and milestones. Click any card to view it in full."
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
              {cat}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, i) => (
            <motion.div
              layout
              key={cert.title + i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            >
              <button
                onClick={() => setActive(cert)}
                data-cursor-hover
                className="bracket-card group w-full rounded-xl p-6 text-left transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber/10 text-amber">
                    <Award size={18} />
                  </div>
                  <span className="mono-label text-[11px] text-muted">{cert.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted">{cert.organization}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">{cert.description}</p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-signal opacity-0 transition-opacity group-hover:opacity-100">
                  <Eye size={13} /> View certificate
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CertificateModal certificate={active} onClose={() => setActive(null)} />
    </section>
  )
}
