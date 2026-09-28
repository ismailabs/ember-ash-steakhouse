import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'

export function ButtonLink({ to, children, variant = 'solid', className = '' }: { to: string; children: ReactNode; variant?: 'solid' | 'outline' | 'text'; className?: string }) {
  const base = 'focus-ring group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[.78rem] font-semibold uppercase tracking-[.14em] transition duration-300'
  const variants = {
    solid: 'bg-paper text-ink hover:bg-ember-soft',
    outline: 'border border-white/20 text-paper hover:border-ember/70 hover:bg-white/5',
    text: 'px-0 py-2 text-paper hover:text-ember-soft',
  }
  return <Link className={`${base} ${variants[variant]} ${className}`} to={to}>{children}<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
}
