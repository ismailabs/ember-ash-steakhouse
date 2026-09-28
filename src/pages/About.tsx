import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { ButtonLink } from '../components/Button'
import { facts, images } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function About() {
  useDocumentMeta('About', 'The fictional story, philosophy and live-fire craft behind Ember & Ash.')

  return (
    <>
      <PageHero eyebrow="About the concept" title="Less spectacle. More intent." copy="Ember & Ash is an original fictional steakhouse concept built for this portfolio — a study in restraint, warmth and fire-led dining." image={images.dining} imageAlt="Warm, modern restaurant interior" />

      <section className="container-shell py-24 sm:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <Reveal>
            <p className="eyebrow mb-5">The story</p>
            <h2 className="display text-balance text-5xl leading-[.9] sm:text-6xl lg:text-7xl">A restaurant imagined around one honest source of heat.</h2>
          </Reveal>
          <div className="space-y-8 lg:pt-24">
            <Reveal><p className="text-xl leading-8 text-paper/68 sm:text-2xl sm:leading-9">The fictional idea began with a simple question: what would a modern steakhouse feel like if fire was treated as craft, not performance?</p></Reveal>
            <Reveal delay={.06}><p className="max-w-2xl text-base leading-7 text-paper/50">The answer is a quieter room, a tighter menu and a kitchen where smoke, char and resting time are used with the same precision as seasoning. Every element — from the typography to the plating — is designed to feel tactile and deliberate.</p></Reveal>
            <Reveal delay={.12}><p className="max-w-2xl text-base leading-7 text-paper/50">Ember & Ash is not a real restaurant. The name, team, food, address and story were created to demonstrate brand thinking, responsive front-end development and interaction design.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="grid border-y hairline lg:grid-cols-[1.06fr_.94fr]">
        <div className="min-h-[620px] overflow-hidden lg:min-h-[780px]"><img src={images.chef} alt="Chef working in a professional kitchen" className="h-full w-full object-cover" loading="lazy" /></div>
        <div className="flex items-center bg-[#11100e] px-[var(--page-gutter)] py-20 lg:py-28">
          <div className="max-w-xl">
            <SectionHeading eyebrow="The fictional chef" title="Mara Vale. Precision without theatre." copy="Chef Mara Vale is a fictional character created for the Ember & Ash concept. Her approach is written around clarity: fewer ingredients, cleaner technique and enough smoke to leave a memory." />
            <Reveal className="mt-9 border-l border-ember/50 pl-6">
              <blockquote className="display text-3xl leading-tight text-paper/85 sm:text-4xl">“The fire should be felt in the food, not performed at the table.”</blockquote>
              <p className="mt-4 text-xs uppercase tracking-[.15em] text-paper/35">Fictional quote · Chef Mara Vale</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-shell py-24 sm:py-32 lg:py-40">
        <SectionHeading eyebrow="Principles" title="What the concept stands for." />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            ['01', 'Respect the ingredient', 'Technique should reveal quality, not cover it. The fictional menu starts with sourcing and ends with restraint.'],
            ['02', 'Use fire deliberately', 'Char, smoke and heat are treated as distinct tools. Each one has a purpose and a limit.'],
            ['03', 'Design for attention', 'The room, service and interface all remove friction so the guest can stay present with the meal.'],
          ].map(([number, title, body], index) => (
            <Reveal key={number} delay={index * .07} className="bg-[#11100e] p-8 sm:p-10">
              <p className="mb-16 text-xs font-semibold tracking-[.2em] text-ember">{number}</p>
              <h3 className="display text-3xl text-paper">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-paper/48">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y hairline bg-[#0f0e0c]">
        <div className="container-shell grid py-20 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([value, label], index) => (
            <Reveal key={label} delay={index * .05} className="border-b hairline py-7 sm:border-r sm:px-6 lg:border-b-0 first:pl-0 last:border-r-0">
              <p className="display text-5xl text-ember-soft">{value}</p>
              <p className="mt-3 text-xs uppercase tracking-[.14em] text-paper/38">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-24 sm:py-32 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="See the atmosphere" title="From flame to table." copy="Explore the visual language of the fictional restaurant across food, kitchen and dining-room imagery." />
          <Reveal className="lg:text-right"><ButtonLink to="/gallery">View gallery</ButtonLink></Reveal>
        </div>
      </section>
    </>
  )
}
