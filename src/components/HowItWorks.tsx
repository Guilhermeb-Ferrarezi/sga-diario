import { SectionHeader } from './SectionHeader'

const steps = [
  { t: 'Fala no WhatsApp', d: 'Com ou sem time. A gente atende os dois e organiza tudo.' },
  { t: 'A gente resolve', d: 'Já tem time? Confirmado. Não tem? A gente te encaixa em um, de graça.' },
  { t: 'Jogue ao vivo', d: 'Narrador, comentarista, capa e HUD profissional em cada partida.' },
  { t: 'Entre para a história', d: 'Seu nome vai pro ranking e suas stats pro histórico permanente da SGA.' },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-32 px-6 border-t border-border bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Como Funciona"
          title={
            <>
              Do WhatsApp
              <br />
              ao <span className="text-primary">palco ao vivo.</span>
            </>
          }
          sub="Simples. Você fala com a gente, a gente cuida do resto — time, transmissão e tudo mais."
        />

        <div className="mt-20 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="w-24 h-24 corner-cut border border-primary/40 bg-background flex items-center justify-center mb-6 relative z-10">
                  <span className="text-display font-black text-3xl text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-display font-bold text-xl mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
