import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { ArrowRight, ArrowUpRight } from '../components/Icons'
import { facts, images, menuItems, restaurant } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function Home() {
  useDocumentMeta('Home', 'Ember & Ash is a fictional premium modern steakhouse portfolio experience built around fire, craft and cinematic interaction.')
  const heroRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.09])
  const featured = menuItems.filter((item) => ['Charred Bone Marrow', 'Black Angus Ribeye 350g', 'Fire-Roasted Sea Bass'].includes(item.name))

  return (
    <>
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.img
          src={images.hero}
          alt="Atmospheric contemporary restaurant dining room with warm lighting"
          className="absolute inset-0 h-full w-full object-cover"
          style={reduce ? undefined : { y: heroY, scale: heroScale }}
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,9,.22)_0%,rgba(11,10,9,.02)_45%,rgba(11,10,9,.75)_100%)]" />
        <div className="container-shell relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-32 sm:pb-14 lg:pb-16">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_18rem]">
            <div>
              <motion.p initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16, duration: .75 }} className="eyebrow mb-6">Fire. Patience. Precision.</motion.p>
              <motion.h1 initial={reduce ? false : { opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24, duration: .9, ease: [0.22, 1, 0.36, 1] }} className="display max-w-6xl text-balance text-[clamp(5.2rem,13vw,12rem)] leading-[.73] text-paper">
                Ember <span className="text-ember-soft">&</span> Ash
              </motion.h1>
              <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .48, duration: .7 }} className="mt-8 flex flex-wrap gap-3">
                <ButtonLink to="/menu">Explore the menu</ButtonLink>
                <ButtonLink to="/contact" variant="outline">Demo reservation</ButtonLink>
              </motion.div>
            </div>
            <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65, duration: .8 }} className="border-l border-white/15 pl-5 text-sm leading-6 text-paper/60 lg:mb-2">
              <p className="mb-4 max-w-[17rem]">A fictional Kuala Lumpur steakhouse concept where dry-aged beef meets live-fire cooking and quiet, deliberate service.</p>
              <p className="text-xs uppercase tracking-[.16em] text-paper/35">Portfolio concept · Not a real restaurant</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y hairline bg-[#0d0c0a] py-4" aria-hidden="true">
        <div className="marquee-track flex gap-10 whitespace-nowrap text-xs font-semibold uppercase tracking-[.24em] text-paper/35">
          {[0, 1].map((set) => (
            <div className="flex gap-10" key={set}>
              <span>Dry aged</span><span className="text-ember">◆</span><span>Live fire</span><span className="text-ember">◆</span><span>Season-led</span><span className="text-ember">◆</span><span>Late night</span><span className="text-ember">◆</span><span>Fictional concept</span><span className="text-ember">◆</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-24 sm:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <p className="eyebrow mb-5">The premise</p>
            <h2 className="display text-balance text-5xl leading-[.9] sm:text-6xl lg:text-7xl">Nothing to hide behind. Just heat, ingredient and time.</h2>
          </Reveal>
          <div className="space-y-8 lg:pt-28">
            <Reveal>
              <p className="max-w-2xl text-xl leading-8 text-paper/68 sm:text-2xl sm:leading-9">Ember & Ash imagines a steakhouse stripped of ceremony and rebuilt around the primal clarity of live fire. Every element has a reason to be on the plate.</p>
            </Reveal>
            <Reveal delay={.08}>
              <p className="max-w-2xl text-base leading-7 text-paper/50">Our fictional kitchen dry-ages selected cuts, works with whole ingredients, and uses coal, embers and smoke as tools rather than theatre. The result is food designed to feel direct, warm and memorable.</p>
            </Reveal>
            <Reveal delay={.12}><ButtonLink to="/about" variant="text">Read our fictional story</ButtonLink></Reveal>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-[#11100e]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[58vh] overflow-hidden lg:min-h-[760px]">
            <motion.img whileHover={reduce ? undefined : { scale: 1.025 }} transition={{ duration: .8 }} src={images.steak} alt="Fire-seared steak with herbs" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-7 text-xs uppercase tracking-[.18em] text-paper/55">Signature cut · fictional menu</p>
          </div>
          <div className="flex items-center px-[var(--page-gutter)] py-20 lg:py-28">
            <div className="w-full max-w-xl">
              <SectionHeading eyebrow="From the fire" title="A short menu. A long memory." copy="The fictional menu is intentionally focused: dry-aged steaks, fire-roasted mains and sides built to share." />
              <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                {featured.map((item, index) => (
                  <Reveal key={item.name} delay={index * .06} className="group py-6">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="display text-2xl text-paper transition group-hover:text-ember-soft">{item.name}</p>
                        <p className="mt-2 max-w-md text-sm leading-6 text-paper/45">{item.description}</p>
                      </div>
                      <span className="shrink-0 text-sm text-ember">{item.price}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-8"><ButtonLink to="/menu">View full menu</ButtonLink></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-24 sm:py-32 lg:py-40">
        <SectionHeading eyebrow="By the numbers" title="Built around restraint." copy="A few details from the fictional Ember & Ash concept." />
        <div className="mt-16 grid border-y hairline sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([value, label], index) => (
            <Reveal key={label} delay={index * .06} className="border-b hairline px-0 py-9 sm:border-r sm:px-7 lg:border-b-0 first:pl-0 last:border-r-0">
              <p className="display text-5xl text-ember-soft sm:text-6xl">{value}</p>
              <p className="mt-3 text-xs uppercase tracking-[.16em] text-paper/40">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative min-h-[78vh] overflow-hidden">
        <img src={images.dining} alt="Atmospheric modern restaurant interior" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/58" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(11,10,9,.65)_100%)]" />
        <div className="container-shell relative z-10 flex min-h-[78vh] items-center justify-center py-24 text-center">
          <Reveal className="max-w-4xl">
            <p className="eyebrow mb-6">The room</p>
            <h2 className="display text-balance text-[clamp(4rem,9vw,8rem)] leading-[.82]">Dark room. Open flame. Good company.</h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-paper/60">An imagined dining room shaped by warm light, dark timber and a view into the fire-led kitchen.</p>
            <div className="mt-8"><ButtonLink to="/gallery" variant="outline">Enter the gallery</ButtonLink></div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-24 sm:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <SectionHeading eyebrow="Dinner, imagined" title="Your table by the fire." copy="The reservation flow is a front-end demonstration only. No booking is submitted and no real table is held." />
          <Reveal className="lg:text-right">
            <div className="inline-flex flex-col gap-2 border-l border-ember/40 pl-5 text-left">
              <span className="text-sm text-paper/50">Tonight's fictional service</span>
              <span className="display text-3xl text-paper">5:30 PM — late</span>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#11100e]">
          <Link to="/contact" className="focus-ring group flex flex-col justify-between gap-10 p-8 transition hover:bg-white/[.025] sm:p-12 lg:flex-row lg:items-center">
            <div>
              <p className="eyebrow mb-4">Demo reservation</p>
              <p className="display text-4xl sm:text-5xl">Choose a fictional table</p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-paper/48">Try the validated reservation form and its demo confirmation state without sending any data to a backend.</p>
            </div>
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-white/15 transition duration-300 group-hover:rotate-[-8deg] group-hover:border-ember group-hover:bg-ember group-hover:text-ink"><ArrowUpRight /></span>
          </Link>
        </Reveal>
      </section>
    </>
  )
}
