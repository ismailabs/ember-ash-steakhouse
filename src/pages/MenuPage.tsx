import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { FictionNotice } from '../components/FictionNotice'
import { images, menuItems, type MenuItem } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const categories: Array<'All' | MenuItem['category']> = ['All', 'Starters', 'Signature Steaks', 'Mains', 'Sides', 'Desserts', 'Zero-Proof']

export default function MenuPage() {
  useDocumentMeta('Menu', 'Explore the fictional Ember & Ash menu: dry-aged steaks, fire-roasted mains, sides and zero-proof drinks.')
  const [active, setActive] = useState<(typeof categories)[number]>('All')
  const reduce = useReducedMotion()
  const filtered = useMemo(() => active === 'All' ? menuItems : menuItems.filter((item) => item.category === active), [active])

  return (
    <>
      <PageHero eyebrow="The menu" title="Fire, edited." copy="A focused fictional menu built around dry-ageing, live fire and ingredients that carry their own weight." image={images.steak} imageAlt="Fire-seared steak plated for dinner" />
      <section className="container-shell py-20 sm:py-28 lg:py-32">
        <Reveal className="mb-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button key={category} onClick={() => setActive(category)} className={`focus-ring shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[.13em] transition ${active === category ? 'border-ember bg-ember text-ink' : 'border-white/12 text-paper/52 hover:border-white/30 hover:text-paper'}`} aria-pressed={active === category}>{category}</button>
          ))}
        </Reveal>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid gap-x-12 lg:grid-cols-2">
            {filtered.map((item) => (
              <motion.article key={item.name} layout initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -8 }} transition={{ duration: .3 }} className="border-t hairline py-7 last:border-b">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="display text-2xl text-paper sm:text-3xl">{item.name}</h2>
                      {item.tag && <span className="rounded-full border border-ember/25 bg-ember/5 px-2.5 py-1 text-[.62rem] font-semibold uppercase tracking-[.12em] text-ember-soft">{item.tag}</span>}
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-paper/48">{item.description}</p>
                    <p className="mt-3 text-[.66rem] font-semibold uppercase tracking-[.14em] text-paper/28">{item.category}</p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-ember">{item.price}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_.72fr]">
          <FictionNotice />
          <Reveal className="rounded-3xl border border-white/10 p-6 sm:p-7">
            <p className="eyebrow mb-3">Dietary note</p>
            <p className="text-sm leading-6 text-paper/55">Dietary tags are illustrative only. Because this restaurant is fictional, they are not allergen assurances. A real restaurant would require verified kitchen-specific allergen information.</p>
          </Reveal>
        </div>
      </section>

      <section className="grid border-y hairline lg:grid-cols-2">
        <div className="min-h-[480px] overflow-hidden"><img src={images.grill} alt="Steak cooking over high heat" className="h-full w-full object-cover" loading="lazy" /></div>
        <div className="flex items-center bg-[#11100e] px-[var(--page-gutter)] py-20">
          <Reveal className="max-w-xl">
            <p className="eyebrow mb-5">Our fictional fire program</p>
            <h2 className="display text-5xl leading-[.92] sm:text-6xl">Coal for heat. Wood for aroma. Time for everything else.</h2>
            <p className="mt-6 text-base leading-7 text-paper/55">Cuts are imagined as resting over coals, moving through different heat zones and finishing with only what makes the ingredient more itself.</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
