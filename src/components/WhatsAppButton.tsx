import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { CONFIG } from '@/config'

type Variant = 'com-time' | 'sem-time'
type Size = 'sm' | 'md' | 'lg'

interface Props {
  variant: Variant
  size?: Size
  className?: string
  'data-testid'?: string
}

export function buildWaUrl(variant: Variant): string {
  const msg =
    variant === 'com-time' ? CONFIG.WA_MSG_COM_TIME : CONFIG.WA_MSG_SEM_TIME
  return `https://wa.me/${CONFIG.WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function WhatsAppButton({
  variant,
  size = 'md',
  className,
  'data-testid': testId,
}: Props) {
  const isSemTime = variant === 'sem-time'

  return (
    <motion.a
      href={buildWaUrl(variant)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      data-testid={testId}
      className={cn(
        'inline-flex items-center justify-center gap-2 text-display font-bold tracking-[0.12em] transition corner-cut',
        size === 'sm' && 'px-5 py-2.5 text-xs',
        size === 'md' && 'px-7 py-3.5 text-sm',
        size === 'lg' && 'px-9 py-4 text-sm',
        isSemTime
          ? 'border border-white/25 hover:border-primary hover:text-primary'
          : 'bg-primary text-primary-foreground hover:bg-primary-glow shadow-glow',
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      {isSemTime ? 'Me encaixem num time' : 'Inscrever meu time →'}
    </motion.a>
  )
}
