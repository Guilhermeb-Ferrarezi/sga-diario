const items = [
  'Transmissão ao vivo',
  'Narrador e comentarista',
  'Live profissional',
  'Formação de time gratuita',
  'Ranking e histórico SGA',
  '32 times · R$1.000 em prêmios',
  'MD1 — mata-mata',
  'Capa e HUD personalizados',
]

export function Marquee() {
  return (
    <div className="bg-primary overflow-hidden py-2.5">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap text-display text-xs font-bold tracking-[0.18em] text-white uppercase">
        {[0, 1].map((i) => (
          <div key={i} className="flex gap-8 pr-8">
            {items.map((t) => (
              <span key={t}>◆ {t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
