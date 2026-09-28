import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { FictionNotice } from '../components/FictionNotice'
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from '../components/Icons'
import { images, restaurant } from '../data/site'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

type FormState = {
  name: string
  email: string
  date: string
  time: string
  party: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const initial: FormState = { name: '', email: '', date: '', time: '', party: '2', message: '' }

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter a name with at least 2 characters.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email address.'
  if (!values.date) errors.date = 'Choose a demo reservation date.'
  if (!values.time) errors.time = 'Choose a demo reservation time.'
  const party = Number(values.party)
  if (!Number.isFinite(party) || party < 1 || party > 12) errors.party = 'Party size must be between 1 and 12.'
  if (values.message.length > 500) errors.message = 'Please keep the note under 500 characters.'
  return errors
}

export default function Contact() {
  useDocumentMeta('Contact', 'Try the fictional Ember & Ash reservation form and view the demo restaurant contact details.')
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const reduce = useReducedMotion()
  const today = useMemo(() => new Date().toISOString().slice(0, 10), [])

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
    setSubmitted(false)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmitted(true)
  }

  return (
    <>
      <PageHero eyebrow="Contact & reservations" title="Take a fictional seat." copy="Explore a polished front-end reservation flow. Nothing is transmitted, no booking is created, and all restaurant details are fictional." image={images.table} imageAlt="Dining table with plated dishes ready to share" />

      <section className="container-shell py-20 sm:py-28 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-5">Find us — fictionally</p>
              <h2 className="display text-5xl leading-[.92] sm:text-6xl">Dinner starts at the edge of the flame.</h2>
            </Reveal>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              <Reveal className="flex gap-4 py-6"><PinIcon className="mt-1 shrink-0 text-ember" /><div><p className="mb-1 text-xs font-semibold uppercase tracking-[.14em] text-paper/35">Address</p><p className="text-sm leading-6 text-paper/65">{restaurant.address}</p></div></Reveal>
              <Reveal className="flex gap-4 py-6"><PhoneIcon className="mt-1 shrink-0 text-ember" /><div><p className="mb-1 text-xs font-semibold uppercase tracking-[.14em] text-paper/35">Phone</p><p className="text-sm leading-6 text-paper/65">{restaurant.phone} · demo only</p></div></Reveal>
              <Reveal className="flex gap-4 py-6"><MailIcon className="mt-1 shrink-0 text-ember" /><div><p className="mb-1 text-xs font-semibold uppercase tracking-[.14em] text-paper/35">Email</p><a className="focus-ring text-sm leading-6 text-paper/65 hover:text-ember" href={`mailto:${restaurant.email}`}>{restaurant.email}</a></div></Reveal>
              <Reveal className="flex gap-4 py-6"><ClockIcon className="mt-1 shrink-0 text-ember" /><div><p className="mb-2 text-xs font-semibold uppercase tracking-[.14em] text-paper/35">Opening hours</p><div className="space-y-1.5">{restaurant.hours.map(([days, hours]) => <div key={days} className="grid grid-cols-[1fr_auto] gap-5 text-sm"><span className="text-paper/48">{days}</span><span className="text-paper/68">{hours}</span></div>)}</div></div></Reveal>
            </div>

            <div className="mt-8"><FictionNotice compact /></div>
          </div>

          <Reveal className="rounded-[2rem] border border-white/10 bg-[#11100e] p-6 sm:p-9 lg:p-10">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b hairline pb-7">
              <div><p className="eyebrow mb-3">Demo reservation</p><h2 className="display text-4xl sm:text-5xl">Request a table</h2></div>
              <p className="max-w-[15rem] text-xs leading-5 text-paper/35">Front-end demonstration only. No information leaves your browser.</p>
            </div>

            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name}><input className={inputClass(errors.name)} value={form.name} onChange={(e) => update('name', e.target.value)} autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name} /></Field>
                <Field label="Email" error={errors.email}><input className={inputClass(errors.email)} value={form.email} onChange={(e) => update('email', e.target.value)} type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={!!errors.email} /></Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                <Field label="Date" error={errors.date}><input className={inputClass(errors.date)} value={form.date} onChange={(e) => update('date', e.target.value)} type="date" min={today} aria-invalid={!!errors.date} /></Field>
                <Field label="Time" error={errors.time}><select className={inputClass(errors.time)} value={form.time} onChange={(e) => update('time', e.target.value)} aria-invalid={!!errors.time}><option value="">Choose</option>{['5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM'].map((time) => <option value={time} key={time}>{time}</option>)}</select></Field>
                <Field label="Guests" error={errors.party}><input className={inputClass(errors.party)} value={form.party} onChange={(e) => update('party', e.target.value)} type="number" min="1" max="12" inputMode="numeric" aria-invalid={!!errors.party} /></Field>
              </div>
              <Field label="Optional note" error={errors.message} hint={`${form.message.length}/500`}>
                <textarea className={`${inputClass(errors.message)} min-h-32 resize-y`} value={form.message} onChange={(e) => update('message', e.target.value)} maxLength={501} placeholder="Dietary notes, occasion, seating preference…" aria-invalid={!!errors.message} />
              </Field>

              <div className="flex flex-col gap-4 border-t hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-5 text-paper/35">By selecting “Preview request”, you are only testing the fictional interface. Nothing is sent or stored.</p>
                <button type="submit" className="focus-ring shrink-0 rounded-full bg-paper px-6 py-3.5 text-xs font-semibold uppercase tracking-[.14em] text-ink transition hover:bg-ember-soft">Preview request</button>
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-2xl border border-ember/30 bg-ember/8 p-5" role="status">
                    <p className="text-sm font-semibold text-ember-soft">Demo request complete — no reservation was created.</p>
                    <p className="mt-2 text-sm leading-6 text-paper/52">This preview would request a table for {form.party} on {form.date} at {form.time}. In a real product, this is where a verified booking backend would take over.</p>
                    <button type="button" className="focus-ring mt-4 text-xs font-semibold uppercase tracking-[.14em] text-paper/55 underline decoration-white/20 underline-offset-4 hover:text-paper" onClick={() => { setForm(initial); setSubmitted(false); }}>Reset demo</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-24 sm:pb-32 lg:pb-40">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#11100e] p-8 sm:p-12 lg:p-16">
          <div className="grid-lines absolute inset-0 opacity-40" />
          <div className="relative grid gap-9 lg:grid-cols-[1fr_.6fr] lg:items-end">
            <div><p className="eyebrow mb-4">Location presentation</p><h2 className="display text-balance text-5xl leading-[.9] sm:text-6xl">Bukit Bintang, reimagined.</h2><p className="mt-5 max-w-2xl text-sm leading-6 text-paper/48">The address above is intentionally fictional. This map-style block avoids implying a real storefront while demonstrating how location content could be composed in production.</p></div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-6"><p className="text-xs font-semibold uppercase tracking-[.16em] text-ember">17 Ember Lane</p><p className="display mt-2 text-3xl">Kuala Lumpur</p><p className="mt-3 text-xs leading-5 text-paper/35">Fictional location · Portfolio project · No directions available</p></div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

function Field({ label, error, hint, children }: { label: string; error?: string; hint?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[.13em] text-paper/46"><span>{label}</span>{hint && <span className="font-normal tracking-normal text-paper/25">{hint}</span>}</span>
      {children}
      {error && <span className="mt-2 block text-xs leading-5 text-[#e7a6a6]">{error}</span>}
    </label>
  )
}

function inputClass(error?: string) {
  return `focus-ring w-full rounded-xl border bg-black/20 px-4 py-3.5 text-sm text-paper outline-none transition placeholder:text-paper/22 ${error ? 'border-[#c77c7c]/70' : 'border-white/12 hover:border-white/25 focus:border-ember/60'}`
}
