import { Lock } from 'lucide-react'
import { SectionHeader } from './SectionHeader'

const previews = [
  { n: '01', label: 'Top Kills' },
  { n: '02', label: 'Time Invicto' },
  { n: '03', label: 'Melhor Streak' },
]

export function RankingPlaceholder() {
  return (
    <section className="relative py-28 px-6 border-t border-border bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Em breve"
          title={
            <>
              Ranking
              <br />
              <span className="text-primary">& Histórico</span>
            </>
          }
          sub="Cada Diário vira história. Em breve você acompanha ranking de kills, times invictos e stats permanentes aqui."
        />

        <div className="mt-14 relative">
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {previews.map((p) => (
              <div key={p.n} className="glass bracket p-8 opacity-30">
                <div className="text-display text-xs tracking-widest text-primary mb-6">/ {p.n}</div>
                <h3 className="text-display font-bold text-2xl mb-2">{p.label}</h3>
                <div className="h-8 bg-white/5 w-3/4 mt-4" />
                <div className="h-4 bg-white/5 w-1/2 mt-3" />
              </div>
            ))}
          </div>

          {/* Lock overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
            <div className="glass bracket w-14 h-14 flex items-center justify-center">
              <Lock className="h-5 w-5 text-muted-foreground" aria-hidden />
            </div>
            <p className="text-mono text-xs tracking-widest text-muted-foreground">
              HISTÓRICO CHEGANDO EM BREVE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
