import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { WhatsAppButton, buildWaUrl } from '../WhatsAppButton'
import { CONFIG } from '@/config'

describe('WhatsAppButton', () => {
  it('gera URL com-time com número e mensagem corretos', () => {
    render(<WhatsAppButton variant="com-time" data-testid="btn" />)
    const el = screen.getByTestId('btn')
    const href = el.getAttribute('href') ?? ''
    expect(href).toContain(CONFIG.WA_NUMBER)
    expect(href).toContain(encodeURIComponent(CONFIG.WA_MSG_COM_TIME))
  })

  it('gera URL sem-time com número e mensagem corretos', () => {
    render(<WhatsAppButton variant="sem-time" data-testid="btn" />)
    const el = screen.getByTestId('btn')
    const href = el.getAttribute('href') ?? ''
    expect(href).toContain(CONFIG.WA_NUMBER)
    expect(href).toContain(encodeURIComponent(CONFIG.WA_MSG_SEM_TIME))
  })

  it('abre em nova aba', () => {
    render(<WhatsAppButton variant="com-time" data-testid="btn" />)
    expect(screen.getByTestId('btn')).toHaveAttribute('target', '_blank')
  })

  it('buildWaUrl retorna URL wa.me válida', () => {
    const url = buildWaUrl('com-time')
    expect(url).toMatch(/^https:\/\/wa\.me\//)
    expect(url).toContain(CONFIG.WA_NUMBER)
  })

  it('mensagens pré-preenchidas são diferentes entre variantes', () => {
    expect(buildWaUrl('com-time')).not.toBe(buildWaUrl('sem-time'))
  })
})
