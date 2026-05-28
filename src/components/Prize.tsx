import { SectionHeader } from './SectionHeader'
import { CONFIG } from '@/config'

export function Prize() {
  return (
    <section id="premiacao" className="relative py-28 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Transparência total"
          title={
            <>
              A premiação,
              <br />
              <span className="text-primary">sem enrolação.</span>
            </>
          }
          sub={`R$${CONFIG.PREMIACAO_TOTAL.toLocaleString('pt-BR')} em premiação. Inscrição R$${CONFIG.INSCRICAO} por time. O foco é a experiência — o prêmio é bônus.`}
        />

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-border">
          <PrizeCard
            label="2º lugar"
            value={`R$${CONFIG.PREMIO_2}`}
            sub="Vice-campeão"
          />
          <PrizeCard
            label="1º lugar"
            value={`R$${CONFIG.PREMIO_1}`}
            sub="Time campeão"
            highlight
          />
          <PrizeCard
            label="3º lugar"
            value={CONFIG.PREMIO_3}
            sub="Garante presença na próxima edição"
          />
        </div>

        <p className="mt-10 text-mono text-xs tracking-widest text-muted-foreground italic">
          "O DINHEIRO VAI EMBORA. A HISTÓRIA FICA."
        </p>
      </div>
    </section>
  )
}

function PrizeCard({
  label,
  value,
  sub,
  highlight,
}: {
  label: string
  value: string
  sub: string
  highlight?: boolean
}) {
  // Valores longos (ex.: "Vaga para o próximo campeonato") usam fonte menor
  const isLong = value.length > 8
  return (
    <div
      className={`bracket p-9 text-center flex flex-col justify-center ${highlight ? 'bg-primary/[0.07] border border-primary/35' : 'glass'}`}
    >
      <div className="text-display text-xs tracking-[0.2em] text-muted-foreground mb-2">
        {label.toUpperCase()}
      </div>
      <div
        className={`text-display font-bold leading-none mb-4 ${isLong ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'} ${highlight ? 'text-primary text-glow' : 'text-foreground'}`}
      >
        {value}
      </div>
      <p className="text-xs text-muted-foreground normal-case">{sub}</p>
    </div>
  )
}
