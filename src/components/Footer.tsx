'use client'

import { bio } from '@/data/bio'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--bg-border)',
        padding: '32px 24px',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Left — name + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--text-accent)',
            }}
          >
            {bio.name}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '11px',
              color: 'var(--text-muted)',
            }}
          >
            © {new Date().getFullYear()} — built with Next.js
          </span>
        </div>

        {/* Right — social links */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {bio.github && (
            <a
              href={bio.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '12px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              GitHub
            </a>
          )}
          {bio.linkedin && (
            <a
              href={bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '12px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              LinkedIn
            </a>
          )}
          <a
            href={`mailto:${bio.email}`}
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '12px',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
