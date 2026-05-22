import { WhatsAppButton } from './WhatsAppButton'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={`${import.meta.env.BASE_URL}sga-logo.png`} alt="Santos Games Arena" className="h-8 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs text-display tracking-widest text-muted-foreground">
          <a href="#como-funciona" className="hover:text-foreground transition">Como Funciona</a>
          <a href="#diferenciais" className="hover:text-foreground transition">Diferenciais</a>
          <a href="#sem-time" className="hover:text-foreground transition">Sem time?</a>
          <a href="#premiacao" className="hover:text-foreground transition">Premiação</a>
        </div>

        <WhatsAppButton variant="com-time" size="sm" />
      </div>
    </nav>
  )
}
