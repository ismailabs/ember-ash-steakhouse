import { Reveal } from './Reveal'

export function SectionHeading({ eyebrow, title, copy, align = 'left' }: { eyebrow: string; title: string; copy?: string; align?: 'left' | 'center' }) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="display text-balance text-5xl leading-[.92] text-paper sm:text-6xl lg:text-7xl">{title}</h2>
      {copy && <p className="mt-6 max-w-2xl text-base leading-7 text-paper/60 sm:text-lg">{copy}</p>}
    </Reveal>
  )
}
