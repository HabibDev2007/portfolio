import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Image as ImageIcon, X } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { gallery } from '../data/gallery'
import { useT } from '../i18n/useT'
import { ui } from '../i18n/ui'
import { galleryText } from '../i18n/content'

export default function Gallery() {
  const { t } = useT()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const caption = (i: number) => t(galleryText[i], gallery[i].caption)

  return (
    <section id="gallery" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="06"
          label={t(ui.gallery.eyebrow)}
          title={t(ui.gallery.title)}
          description={t(ui.gallery.subtitle)}
        />

        <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {gallery.map((photo, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05} className="break-inside-avoid">
              <button
                onClick={() => setActiveIndex(i)}
                data-cursor-hover
                className="bracket-card group block w-full overflow-hidden rounded-xl"
                style={{ aspectRatio: i % 3 === 0 ? '3/4' : '4/5' }}
              >
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={caption(i)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-surface2 p-4 text-center text-muted">
                    <ImageIcon size={24} />
                    <p className="mono-label text-[11px]">{caption(i)}</p>
                  </div>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-md"
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-line/10 bg-bg/70 text-ink"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-2xl text-center"
            >
              {gallery[activeIndex].src ? (
                <img
                  src={gallery[activeIndex].src}
                  alt={caption(activeIndex)}
                  className="max-h-[75vh] rounded-xl object-contain"
                />
              ) : (
                <p className="mono-label text-muted">{caption(activeIndex)}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
