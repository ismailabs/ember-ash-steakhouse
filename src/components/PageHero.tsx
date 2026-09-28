import { motion, useReducedMotion } from 'motion/react'

export function PageHero({ eyebrow, title, copy, image, imageAlt }: { eyebrow: string; title: string; copy: string; image?: string; imageAlt?: string }) {
  const reduce = useReducedMotion()
  return (
    <section className="relative min-h-[72vh] overflow-hidden border-b hairline pt-32 sm:pt-36">
      {image && <motion.img initial={reduce ? false : { scale: 1.06 }} animate={reduce ? undefined : { scale: 1 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} src={image} alt={imageAlt ?? ''} className="absolute inset-0 h-full w-full object-cover opacity-45" />}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,10,9,.98)_0%,rgba(11,10,9,.82)_55%,rgba(11,10,9,.45)_100%)]" />
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="container-shell relative z-10 flex min-h-[calc(72vh-8rem)] items-end pb-16 sm:pb-20 lg:pb-24">
        <motion.div initial={reduce ? false : { opacity: 0, y: 32 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .85, ease: [0.22,1,.36,1] }} className="max-w-4xl">
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="display text-balance text-[clamp(4rem,10vw,8.5rem)] leading-[.8] text-paper">{title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-paper/62 sm:text-lg">{copy}</p>
        </motion.div>
      </div>
    </section>
  )
}
