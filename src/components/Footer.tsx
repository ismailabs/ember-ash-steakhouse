import { Link } from 'react-router-dom'
import { restaurant } from '../data/site'
import { ArrowUpRight } from './Icons'
import { FictionNotice } from './FictionNotice'

export function Footer() {
  return (
    <footer className="border-t hairline bg-[#090807]">
      <div className="container-shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_.7fr_.7fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-5">Ember & Ash</p>
            <p className="display max-w-xl text-5xl leading-[.95] text-paper sm:text-6xl">Where smoke, patience and fire become dinner.</p>
            <div className="mt-8 max-w-xl"><FictionNotice compact /></div>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[.18em] text-paper/40">Navigate</p>
            <div className="flex flex-col gap-3 text-sm text-paper/68">
              <Link className="focus-ring hover:text-ember" to="/menu">Menu</Link>
              <Link className="focus-ring hover:text-ember" to="/about">About</Link>
              <Link className="focus-ring hover:text-ember" to="/gallery">Gallery</Link>
              <Link className="focus-ring hover:text-ember" to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[.18em] text-paper/40">Fictional contact</p>
            <div className="space-y-3 text-sm leading-6 text-paper/68">
              <p>{restaurant.address}</p>
              <a className="focus-ring block hover:text-ember" href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
              <p>{restaurant.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t hairline pt-10">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[.14em] text-paper/35">
            <p>© 2026 Ember & Ash — fictional concept</p>
            <a className="focus-ring inline-flex items-center gap-2 hover:text-paper" href="#top">Back to top <ArrowUpRight className="h-3.5 w-3.5" /></a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black px-5 py-3 sm:px-8 sm:py-5">
            <img src="/built-by-ismail.png" alt="Built by Ismail" className="mx-auto h-auto w-full max-w-[980px] object-contain" />
          </div>
        </div>
      </div>
    </footer>
  )
}
