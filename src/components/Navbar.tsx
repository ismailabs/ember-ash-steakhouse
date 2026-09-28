import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { NavLink, Link } from 'react-router-dom'
import { MenuIcon, XIcon, ArrowUpRight } from './Icons'

const links = [
  ['/', 'Home'],
  ['/menu', 'Menu'],
  ['/about', 'About'],
  ['/gallery', 'Gallery'],
  ['/contact', 'Contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${scrolled ? 'border-b border-white/10 bg-ink/80 py-3 backdrop-blur-xl' : 'py-5'}`}>
        <div className="container-shell flex items-center justify-between gap-8">
          <Link to="/" className="focus-ring group flex items-center gap-3" aria-label="Ember & Ash home">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-ember/55 text-xs font-semibold text-ember transition group-hover:bg-ember group-hover:text-ink">E&A</span>
            <span className="display text-xl tracking-[.02em] text-paper sm:text-2xl">Ember & Ash</span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `focus-ring relative py-2 text-[.72rem] font-semibold uppercase tracking-[.16em] transition ${isActive ? 'text-ember-soft' : 'text-paper/62 hover:text-paper'}`}>
                {({ isActive }) => <>{label}{isActive && <motion.span layoutId="active-nav" className="absolute inset-x-0 -bottom-0.5 h-px bg-ember" />}</>}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="focus-ring hidden items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[.7rem] font-semibold uppercase tracking-[.16em] text-paper transition hover:border-ember/50 hover:bg-white/5 sm:flex lg:flex">
              Reserve <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15 text-paper lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-expanded={open}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[80] bg-ink" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .28 }}>
            <div className="grid-lines absolute inset-0 opacity-50" />
            <div className="container-shell relative flex h-full flex-col">
              <div className="flex h-20 items-center justify-between border-b hairline">
                <span className="display text-2xl">Ember & Ash</span>
                <button ref={closeRef} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15" onClick={() => setOpen(false)} aria-label="Close navigation menu"><XIcon /></button>
              </div>
              <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile navigation">
                {links.map(([to, label], index) => (
                  <motion.div key={to} initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .05 * index, duration: .45 }}>
                    <NavLink to={to} onClick={() => setOpen(false)} className={({ isActive }) => `focus-ring display block border-b hairline py-3 text-[clamp(3rem,14vw,6rem)] leading-none transition ${isActive ? 'text-ember' : 'text-paper hover:text-ember-soft'}`}>{label}</NavLink>
                  </motion.div>
                ))}
              </nav>
              <p className="pb-7 text-xs leading-5 text-paper/40">Fictional restaurant portfolio project — not a real business.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
