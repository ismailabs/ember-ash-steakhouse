import { ButtonLink } from '../components/Button'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function NotFound() {
  useDocumentMeta('Page not found', 'This fictional Ember & Ash page does not exist.')
  return (
    <section className="container-shell grid min-h-[78vh] place-items-center pt-28 text-center">
      <div className="max-w-2xl py-24">
        <p className="eyebrow mb-6">404 · Off menu</p>
        <h1 className="display text-7xl leading-[.82] sm:text-8xl">Nothing is being served here.</h1>
        <p className="mx-auto mt-7 max-w-lg text-base leading-7 text-paper/50">The page you requested is not part of this fictional restaurant portfolio.</p>
        <div className="mt-8"><ButtonLink to="/">Return home</ButtonLink></div>
      </div>
    </section>
  )
}
