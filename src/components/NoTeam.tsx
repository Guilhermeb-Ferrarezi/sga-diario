import { SectionHeader } from './SectionHeader'
import { WhatsAppButton } from './WhatsAppButton'

const criteria = [
  { n: '01', t: 'Disponibilidade', d: 'Agrupamos quem pode jogar no mesmo horário.' },
  { n: '02', t: 'Elo', d: 'Times equilibrados por faixa de rank.' },
  { n: '03', t: 'Função', d: 'Duelista, suporte, sentinela — você escolhe.' },
  { n: '04', t: 'Frequência', d: 'Casual ou toda semana. Sem pressão.' },
]

export function NoTeam() {
  return (
    <section id="sem-time" className="relative py-32 px-6 border-t border-border bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Maior diferencial da SGA"
          title={
            <>
              Não tem time?
              <br />
              <span className="text-primary">Sem drama.</span>
            </>
          }
          sub="Você fala no WhatsApp, a gente te encaixa num time compatível. Sem custo extra, sem burocracia."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {criteria.map((c) => (
            <div key={c.n} className="glass bracket p-8">
              <div className="text-display text-xs tracking-widest text-primary mb-6">/ {c.n}</div>
              <h3 className="text-display font-bold text-xl mb-3">{c.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <WhatsAppButton variant="sem-time" size="lg" />
          <p className="text-xs text-mono text-muted-foreground tracking-widest">
            100% GRATUITO · SEM CUSTO ADICIONAL
          </p>
        </div>
      </div>
    </section>
  )
}
