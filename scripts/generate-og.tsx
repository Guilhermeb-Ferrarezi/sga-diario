import React from 'react'
import satori from 'satori'
import sharp from 'sharp'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const WIDTH = 1200
const HEIGHT = 630

// ─── Fonts ────────────────────────────────────────────────────────────────────

function findFont(path: string): Buffer | null {
  const full = resolve(path)
  return existsSync(full) ? readFileSync(full) : null
}

const barlowFont = findFont(
  'node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-900-normal.woff',
)
const interFont = findFont(
  'node_modules/@fontsource/inter/files/inter-latin-600-normal.woff',
)

const fonts: Parameters<typeof satori>[1]['fonts'] = []
if (barlowFont) fonts.push({ name: 'Barlow Condensed', data: barlowFont, weight: 900, style: 'normal' })
if (interFont) fonts.push({ name: 'Inter', data: interFont, weight: 600, style: 'normal' })

const fontDisplay = fonts.length > 0 ? 'Barlow Condensed' : 'sans-serif'
const fontBody = fonts.length > 1 ? 'Inter' : 'sans-serif'

// ─── Logo ─────────────────────────────────────────────────────────────────────

const logoPath = resolve('public/sga-logo.png')
const logoDataUri = existsSync(logoPath)
  ? `data:image/png;base64,${readFileSync(logoPath).toString('base64')}`
  : null

const heroPath = resolve('public/hero-arena.png')
const heroDataUri = existsSync(heroPath)
  ? `data:image/png;base64,${readFileSync(heroPath).toString('base64')}`
  : null

// ─── Layout ───────────────────────────────────────────────────────────────────

const element = (
  <div
    style={{
      width: WIDTH,
      height: HEIGHT,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0D1520',
      position: 'relative',
    }}
  >
    {/* Hero background image */}
    {heroDataUri && (
      <img
        src={heroDataUri}
        width={WIDTH}
        height={HEIGHT}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: WIDTH,
          height: HEIGHT,
          objectFit: 'cover',
          opacity: 0.45,
        }}
      />
    )}

    {/* Dark gradient overlay */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: WIDTH,
        height: HEIGHT,
        background: 'linear-gradient(180deg, rgba(13,21,32,0.4) 0%, rgba(13,21,32,0.85) 65%, rgba(13,21,32,1) 100%)',
      }}
    />

    {/* Glow top-right */}
    <div
      style={{
        position: 'absolute',
        top: -180,
        right: -180,
        width: 700,
        height: 700,
        borderRadius: 350,
        backgroundColor: 'rgba(255,70,85,0.12)',
      }}
    />

    {/* Glow bottom-left (hidden, kept for symmetry) */}
    <div
      style={{
        position: 'absolute',
        bottom: -140,
        left: -140,
        width: 520,
        height: 520,
        borderRadius: 260,
        backgroundColor: 'rgba(255,70,85,0.06)',
      }}
    />

    {/* Content */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 60px',
      }}
    >
      {/* Logo */}
      {logoDataUri && (
        <img
          src={logoDataUri}
          width={180}
          height={50}
          style={{ marginBottom: 28, opacity: 0.9 }}
        />
      )}

      {/* Label */}
      <div
        style={{
          display: 'flex',
          fontSize: 18,
          color: '#FF4655',
          letterSpacing: 5,
          textTransform: 'uppercase',
          marginBottom: 20,
          fontFamily: fontBody,
          fontWeight: 600,
        }}
      >
        VALORANT · TODO DIA
      </div>

      {/* Title row */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
          gap: 28,
          marginBottom: 28,
        }}
      >
        <span
          style={{
            fontSize: 148,
            fontFamily: fontDisplay,
            fontWeight: 900,
            color: '#f4f4f5',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          DIÁRIO
        </span>
        <span
          style={{
            fontSize: 148,
            fontFamily: fontDisplay,
            fontWeight: 900,
            color: '#FF4655',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          SGA
        </span>
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 30,
          color: '#71717a',
          fontFamily: fontBody,
          marginBottom: 44,
        }}
      >
        Jogue ao vivo. Seja transmitido como pro.
      </div>

      {/* Date badge */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 14,
          backgroundColor: '#1a1d22',
          borderRadius: 50,
          padding: '14px 32px',
          border: '1.5px solid rgba(255,70,85,0.35)',
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#FF4655',
          }}
        />
        <span
          style={{
            fontSize: 24,
            color: '#f4f4f5',
            fontFamily: fontBody,
            fontWeight: 600,
          }}
        >
          Próxima edição: 28/05 às 18h
        </span>
      </div>
    </div>
  </div>
)

// ─── Generate ─────────────────────────────────────────────────────────────────

const svg = await satori(element, { width: WIDTH, height: HEIGHT, fonts })
const png = await sharp(Buffer.from(svg)).png().toBuffer()
writeFileSync(resolve('public/og.png'), png)
console.log('✓ OG image gerada: public/og.png (1200×630)')
