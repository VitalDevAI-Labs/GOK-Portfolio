'use client'

import { useEffect, useState, useRef } from 'react'
import { bio } from '@/data/bio'

function renderHeadline(headline: string, accentWord: string) {
  const parts = headline.split(accentWord)
  if (parts.length < 2) return <>{headline}</>
  return (
    <>
      {parts[0]}
      <span style={{ color: 'var(--text-accent)' }}>{accentWord}</span>
      {parts[1]}
    </>
  )
}

export default function Hero() {
  const [displayWord, setDisplayWord] = useState(bio.typingWords[0])
  const [charCount, setCharCount] = useState(bio.typingWords[0].length)
  const wordIndexRef = useRef(0)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion.current) return

    let timeout: ReturnType<typeof setTimeout>

    const erase = () => {
      setCharCount(c => {
        if (c > 0) {
          timeout = setTimeout(erase, 40)
          return c - 1
        }
        const next = (wordIndexRef.current + 1) % bio.typingWords.length
        wordIndexRef.current = next
        setDisplayWord(bio.typingWords[next])
        setCharCount(bio.typingWords[next].length)
        timeout = setTimeout(erase, 2400)
        return bio.typingWords[next].length
      })
    }

    timeout = setTimeout(erase, 2400)
    return () => clearTimeout(timeout)
  }, [])

  const visibleWord = displayWord.slice(0, charCount)

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        backgroundColor: 'var(--bg)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative radial gradient background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: [
            'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(168,85,247,0.06) 0%, transparent 70%)',
            'radial-gradient(ellipse 40% 60% at 80% 20%, rgba(168,85,247,0.03) 0%, transparent 60%)',
          ].join(', '),
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Availability badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid rgba(168,85,247,0.20)',
            backgroundColor: 'rgba(168,85,247,0.06)',
            marginBottom: '28px',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#4ade80',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '12px',
              color: 'var(--text-muted)',
              letterSpacing: '0.06em',
            }}
          >
            Available for new opportunities
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            margin: '0 0 20px 0',
            letterSpacing: '-0.02em',
            maxWidth: '720px',
          }}
        >
          {renderHeadline(bio.headline, bio.headlineAccentWord)}
        </h1>

        {/* Typing line */}
        <p
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '22px',
            fontWeight: 400,
            color: 'var(--text-accent)',
            marginBottom: '16px',
            minHeight: '32px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          I am a&nbsp;
          <span>{visibleWord}</span>
          <span className="typing-cursor" aria-hidden="true" />
        </p>

        {/* Subline */}
        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '14px',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            marginBottom: '44px',
            maxWidth: '480px',
          }}
        >
          {bio.tagline}
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              padding: '14px 24px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--text-accent)',
              color: 'var(--bg)',
              textDecoration: 'none',
              transition: 'box-shadow 0.25s ease, transform 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(168,85,247,0.35)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            View My Work →
          </a>

          <a
            href="#contact"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              padding: '12px 20px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'transparent',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.06)',
              transition: 'box-shadow 0.25s ease, border-color 0.2s ease, transform 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(168,85,247,0.12)'
              e.currentTarget.style.borderColor = 'rgba(168,85,247,0.30)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
