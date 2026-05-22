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
          sub="R$5 por jogador. O vencedor leva tudo. O foco é a experiência — o prêmio é bônus."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-border">
          <PrizeCard
            label="Taxa por jogador"
            value={`R$${CONFIG.TAXA_JOGADOR}`}
            sub="Cada jogador paga individualmente"
          />
          <PrizeCard
            label="Por time completo"
            value={`R$${CONFIG.TAXA_JOGADOR * 5}`}
            sub="5 jogadores · R$5 cada"
            highlight
          />
          <PrizeCard
            label="Time vencedor"
            value={`R$${CONFIG.PREMIACAO}`}
            sub="Prêmio para o time campeão do dia"
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
  return (
    <div
      className={`bracket p-9 text-center ${highlight ? 'bg-primary/[0.07] border border-primary/35' : 'glass'}`}
    >
      <div className="text-display text-xs tracking-[0.2em] text-muted-foreground mb-2">
        {label.toUpperCase()}
      </div>
      <div
        className={`text-display font-bold text-4xl md:text-5xl leading-none mb-4 ${highlight ? 'text-primary text-glow' : 'text-foreground'}`}
      >
        {value}
      </div>
      <p className="text-xs text-muted-foreground normal-case">{sub}</p>
    </div>
  )
}
