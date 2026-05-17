'use client'

import { bio } from '@/data/bio'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>

        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '13px',
            color: 'var(--text-accent)',
            letterSpacing: '0.1em',
            marginBottom: '16px',
          }}
        >
          {'// hello, world'}
        </p>

        <h1
          style={{
            fontSize: 'clamp(48px, 8vw, 80px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            margin: '0 0 12px 0',
          }}
        >
          {bio.name}
        </h1>

        <p
          style={{
            fontFamily: 'monospace',
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            color: 'var(--text-accent)',
            fontWeight: 500,
            marginBottom: '24px',
          }}
        >
          {bio.role}
        </p>

        <p
          style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '40px',
          }}
        >
          {bio.tagline}
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              fontWeight: 600,
              padding: '12px 28px',
              border: '1px solid var(--text-accent)',
              color: 'var(--text-accent)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'background-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--text-accent)'
              e.currentTarget.style.color = 'var(--bg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--text-accent)'
            }}
          >
            Get in Touch
          </a>

          <a
            href={bio.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              fontWeight: 600,
              padding: '12px 28px',
              border: '1px solid var(--bg-border)',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--text-muted)'
              e.currentTarget.style.color = 'var(--text-primary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--bg-border)'
              e.currentTarget.style.color = 'var(--text-muted)'
            }}
          >
            Resume
          </a>
        </div>

      </div>
    </section>
  )
}
