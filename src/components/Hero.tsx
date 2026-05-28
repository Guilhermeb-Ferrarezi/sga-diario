import { CONFIG } from '@/config'
import { WhatsAppButton } from './WhatsAppButton'

export function Hero() {
  return (
    <section id="top" className="scanlines relative min-h-screen flex flex-col overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}hero-arena.png`}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Main content */}
      <div className="relative z-[2] flex-1 w-full max-w-5xl mx-auto px-6 py-16 flex flex-col justify-center">
        <div className="animate-fade-up max-w-2xl">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 text-display text-xs tracking-[0.2em] text-primary mb-6 border border-primary/40 px-3.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            VALORANT · CAMPEONATO 12/07
          </div>

          {/* Title */}
          <h1 className="text-display font-bold text-6xl sm:text-7xl md:text-8xl leading-[0.92] mb-5">
            Diário
            <br />
            <span className="text-primary text-glow">SGA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed normal-case">
Campeonato ao vivo com 32 times. Narrador, comentarista e HUD profissional em cada partida — com ou sem time formado.
          </p>

          {/* No-team highlight */}
          <div className="glass-red bracket p-5 max-w-md mb-8">
            <p className="text-display text-sm tracking-wide text-foreground leading-snug">
              <span className="text-primary font-bold">Não tem time?</span>{' '}
              A gente te encaixa — de graça.
            </p>
            <p className="text-xs text-muted-foreground mt-2 normal-case">
              Sem precisar chegar com 5 amigos. A SGA forma o time pra você.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <WhatsAppButton variant="com-time" size="lg" />
            <WhatsAppButton variant="sem-time" size="lg" />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-[2] w-full bg-border grid grid-cols-2 md:grid-cols-4 gap-px border-t border-border">
        <StatItem label="Data prevista" value={`${CONFIG.PREVISAO} · ${CONFIG.HORARIO}`} sub="vagas limitadas" />
        <StatItem label="Inscrição" value={`R$${CONFIG.INSCRICAO}`} sub="por time" highlight />
        <StatItem label="Formato" value={`${CONFIG.TIMES} times`} sub="MD1 — mata-mata" />
        <StatItem label="Premiação" value={`R$${CONFIG.PREMIACAO_TOTAL.toLocaleString('pt-BR')}`} sub={`campeão leva R$${CONFIG.PREMIO_1}`} />
      </div>
    </section>
  )
}

function StatItem({
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
    <div className="bg-surface px-6 py-[18px] flex flex-col gap-0.5">
      <span className="text-display text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </span>
      <span
        className={`text-display font-bold text-2xl leading-none ${highlight ? 'text-primary' : 'text-foreground'}`}
      >
        {value}
      </span>
      <span className="text-[0.65rem] text-muted-foreground leading-tight">{sub}</span>
    </div>
  )
}
