import { AnimatePresence, motion } from 'framer-motion'
import { X, Award } from 'lucide-react'
import type { Certificate } from '../data/certificates'
import { useT } from '../i18n/useT'
import type { LocalizedText } from '../i18n/config'

interface Props {
  certificate: Certificate | null
  translation?: { title: LocalizedText; description: LocalizedText }
  onClose: () => void
}

export default function CertificateModal({ certificate, translation, onClose }: Props) {
  const { t } = useT()
  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bracket-card relative w-full max-w-2xl overflow-hidden rounded-2xl bg-surface"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line/10 bg-bg/70 text-ink backdrop-blur"
            >
              <X size={16} />
            </button>

            <div className="flex aspect-[4/3] w-full items-center justify-center bg-surface2">
              {certificate.image ? (
                <img src={certificate.image} alt={certificate.title} className="h-full w-full object-cover" />
              ) : (
                <div className="flex flex-col items-center gap-3 text-muted">
                  <Award size={40} />
                  <p className="mono-label text-xs">[ADD YOUR CERTIFICATE IMAGE]</p>
                </div>
              )}
            </div>

            <div className="p-6">
              <p className="mono-label text-xs text-signal">{certificate.date} · {certificate.category}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {t(translation?.title, certificate.title)}
              </h3>
              <p className="mt-1 text-sm text-muted">{certificate.organization}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {t(translation?.description, certificate.description)}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
