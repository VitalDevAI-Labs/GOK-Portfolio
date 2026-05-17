'use client'

import { bio } from '@/data/bio'

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '96px 24px',
        borderTop: '1px solid var(--bg-border)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '12px',
            color: 'var(--text-accent)',
            letterSpacing: '0.1em',
            marginBottom: '8px',
          }}
        >
          {'// get-in-touch'}
        </p>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}
        >
          Contact
        </h2>
        <p
          style={{
            fontSize: '15px',
            color: 'var(--text-muted)',
            maxWidth: '480px',
            lineHeight: 1.7,
            marginBottom: '40px',
          }}
        >
          Open to new opportunities. If you have a role or project that could be a good fit, I'd love to hear from you.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a
            href={`mailto:${bio.email}`}
            style={{
              fontFamily: 'var(--font-mono), monospace',
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
            {bio.email}
          </a>

          <a
            href={bio.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono), monospace',
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
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
