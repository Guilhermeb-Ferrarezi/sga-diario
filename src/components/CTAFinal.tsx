import { CONFIG } from '@/config'
import { WhatsAppButton } from './WhatsAppButton'

export function CTAFinal() {
  return (
    <>
      <section id="inscricao" className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,70,85,0.14) 0%, transparent 65%), #0D1520',
            }}
          />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 text-mono text-xs tracking-[0.3em] text-primary mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            INSCRIÇÕES ABERTAS · VAGAS LIMITADAS
          </div>

          <h2 className="text-display font-black text-5xl md:text-7xl leading-[0.9] mb-8">
            Pronto para jogar
            <br />
            em <span className="text-primary text-glow">outro nível?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-6 normal-case">
            Próxima edição: <strong className="text-foreground">{CONFIG.PROXIMA_EDICAO} às {CONFIG.HORARIO}</strong>
            {' · '}
            <strong className="text-primary">restam {CONFIG.VAGAS_RESTANTES} vagas</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <WhatsAppButton variant="com-time" size="lg" />
            <WhatsAppButton variant="sem-time" size="lg" />
          </div>

          <div className="text-mono text-xs tracking-widest text-muted-foreground">
            R${CONFIG.TAXA_JOGADOR}/JOGADOR · {CONFIG.PROXIMA_EDICAO} · {CONFIG.HORARIO} · MD1
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}sga-logo.png`}
              alt="Santos Games Arena"
              loading="lazy"
              className="h-10 w-auto"
            />
            <div className="text-mono text-xs text-muted-foreground hidden md:block">
              Construindo o cenário competitivo regional.
            </div>
          </div>
          <div className="text-mono text-xs text-muted-foreground tracking-widest">
            © {new Date().getFullYear()} SGA · TODOS OS DIREITOS RESERVADOS
          </div>
        </div>
      </footer>
    </>
  )
}
