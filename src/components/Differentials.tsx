import { SectionHeader } from './SectionHeader'

const features = [
  {
    n: '01',
    t: 'Transmissão ao vivo',
    d: '100% das partidas transmitidas. Todo jogo tem narrador, comentarista e HUD profissional — o mesmo nível visual que você assiste na Twitch.',
  },
  {
    n: '02',
    t: 'Narração e comentarista',
    d: 'Cada rodada com narrador e comentarista ao vivo. A pressão e emoção de um campeonato de verdade, toda noite.',
  },
  {
    n: '03',
    t: 'Capa e identidade SGA',
    d: 'Intro personalizada, transições e identidade visual completa da SGA. Seu jogo tem cara de campeonato profissional.',
  },
  {
    n: '04',
    t: 'Ranking e histórico',
    d: 'Cada partida registrada. Ranking de kills, histórico de times invictos e stats permanentes no site da SGA.',
  },
  {
    n: '05',
    t: 'Formação de time',
    d: '100% gratuito. Agrupamos por elo, função, horário e frequência. Sem precisar chegar com 5 amigos.',
  },
  {
    n: '06',
    t: 'Todo dia, todo noite',
    d: 'Não é um campeonato com data única. Acontece todo dia. Jogue quando puder e volte quando quiser.',
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-28 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Diferenciais"
          title={
            <>
              Não é mais um
              <br />
              <span className="text-primary">jogo de Discord.</span>
            </>
          }
          sub="A maioria dos campeonatos tenta te convencer com prêmio. Aqui, a proposta é outra. Você vem pra viver o jogo de verdade — todo dia."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-14">
          {features.map((f) => (
            <div
              key={f.n}
              className="group glass bracket p-8 hover:bg-surface-elevated transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-primary transition-all duration-500" />
              <div className="text-display text-xs tracking-widest text-primary mb-6">/ {f.n}</div>
              <h3 className="text-display font-bold text-2xl mb-3">{f.t}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm normal-case">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
