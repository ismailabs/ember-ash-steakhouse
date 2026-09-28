export function FictionNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`border border-ember/20 bg-ember/5 ${compact ? 'rounded-2xl p-4' : 'rounded-3xl p-6 sm:p-7'}`}>
      <p className="eyebrow mb-2">Portfolio project</p>
      <p className={`${compact ? 'text-xs leading-5' : 'text-sm leading-6'} text-paper/60`}>
        Ember & Ash is a fictional restaurant created for portfolio demonstration. It is not a real business; reservations, contact details, menu items, prices, and addresses shown here are fictional.
      </p>
    </div>
  )
}
