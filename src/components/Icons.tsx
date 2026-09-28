import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }

export function ArrowUpRight(props: IconProps) {
  return <svg {...base} {...props}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
}
export function ArrowRight(props: IconProps) {
  return <svg {...base} {...props}><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></svg>
}
export function MenuIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 7h16"/><path d="M4 17h16"/></svg>
}
export function XIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m6 6 12 12"/><path d="m18 6-12 12"/></svg>
}
export function PlusIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 5v14"/><path d="M5 12h14"/></svg>
}
export function ChevronDown(props: IconProps) {
  return <svg {...base} {...props}><path d="m6 9 6 6 6-6"/></svg>
}
export function ClockIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/></svg>
}
export function PinIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.3"/></svg>
}
export function MailIcon(props: IconProps) {
  return <svg {...base} {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
}
export function PhoneIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M7.4 4.7 5.6 6.4c-.7.7-.7 1.8-.2 2.7 2 3.6 4.9 6.5 8.5 8.5.9.5 2 .5 2.7-.2l1.7-1.8c.5-.5.6-1.3.2-1.9l-1.7-2.5c-.4-.6-1.2-.8-1.8-.4l-1.5 1c-1.1-.7-1.9-1.5-2.6-2.6l1-1.5c.4-.6.2-1.4-.4-1.8L9.3 4.4c-.6-.4-1.4-.3-1.9.3Z"/></svg>
}
