import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { XIcon, PlusIcon } from '../components/Icons'
import { galleryItems, images, type GalleryItem } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function Gallery() {
  useDocumentMeta('Gallery', 'An immersive gallery of the fictional Ember & Ash restaurant concept, from the fire to the dining room.')
  const [selected, setSelected] = useState<GalleryItem | null>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!selected) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [selected])

  return (
    <>
      <PageHero eyebrow="Gallery" title="After dark." copy="A visual study of the imagined room, the fire and the details between service and plate." image={images.interior} imageAlt="Restaurant seating prepared for evening service" />

      <section className="container-shell py-20 sm:py-28 lg:py-32">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b hairline pb-8 sm:flex-row sm:items-end">
          <Reveal><p className="eyebrow mb-3">Eight frames</p><h2 className="display text-4xl sm:text-5xl">A fictional evening at Ember & Ash.</h2></Reveal>
          <Reveal><p className="max-w-md text-sm leading-6 text-paper/45">Select any image to open the lightbox. Remote image references are centralized in the project data file for easy replacement.</p></Reveal>
        </div>

        <div className="grid auto-rows-[220px] gap-4 sm:auto-rows-[260px] sm:grid-cols-2 lg:auto-rows-[300px] lg:grid-cols-3">
          {galleryItems.map((item, index) => {
            const span = item.orientation === 'portrait' ? 'sm:row-span-2' : item.orientation === 'landscape' ? 'lg:col-span-2' : ''
            return (
              <Reveal key={`${item.label}-${index}`} delay={(index % 4) * .04} className={`${span} min-h-0`}>
                <button onClick={() => setSelected(item)} className="focus-ring group relative h-full w-full overflow-hidden rounded-[1.4rem] border border-white/8 text-left" aria-label={`Open image: ${item.label}`}>
                  <motion.img whileHover={reduce ? undefined : { scale: 1.045 }} transition={{ duration: .65 }} src={item.src} alt={item.alt} loading={index < 2 ? 'eager' : 'lazy'} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-black/5 opacity-85 transition group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-6">
                    <div><p className="text-[.65rem] font-semibold uppercase tracking-[.18em] text-ember-soft">0{index + 1}</p><p className="display mt-1 text-2xl text-paper">{item.label}</p></div>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/20 transition group-hover:rotate-90 group-hover:bg-paper group-hover:text-ink"><PlusIcon className="h-4 w-4" /></span>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-black/94 p-4 sm:p-8" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={selected.label} onClick={() => setSelected(null)}>
            <motion.div initial={reduce ? false : { scale: .97, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={reduce ? undefined : { scale: .98, opacity: 0 }} transition={{ duration: .28 }} className="relative max-h-[90vh] max-w-6xl" onClick={(event) => event.stopPropagation()}>
              <img src={selected.src} alt={selected.alt} className="max-h-[84vh] w-auto rounded-xl object-contain" />
              <div className="mt-3 flex items-center justify-between gap-4"><p className="display text-2xl">{selected.label}</p><p className="max-w-xl text-right text-xs text-paper/40">{selected.alt}</p></div>
              <button autoFocus className="focus-ring absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/60 backdrop-blur" onClick={() => setSelected(null)} aria-label="Close image"><XIcon /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
