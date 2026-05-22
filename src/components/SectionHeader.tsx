interface Props {
  eyebrow: string
  title: React.ReactNode
  sub?: string
  center?: boolean
}

export function SectionHeader({ eyebrow, title, sub, center }: Props) {
  return (
    <div className={center ? 'max-w-3xl mx-auto text-center' : 'max-w-3xl'}>
      <div
        className={`inline-flex items-center gap-3 text-display text-xs tracking-[0.2em] text-primary mb-5 ${center ? 'justify-center' : ''}`}
      >
        <span className="w-2 h-2 rotate-45 bg-primary" />
        {eyebrow.toUpperCase()}
      </div>
      <h2 className="text-display font-bold text-4xl md:text-6xl leading-[1.02]">{title}</h2>
      {sub && (
        <p
          className={`text-base text-muted-foreground mt-5 max-w-2xl leading-relaxed normal-case ${center ? 'mx-auto' : ''}`}
        >
          {sub}
        </p>
      )}
    </div>
  )
}
