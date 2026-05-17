'use client'

import { bio } from '@/data/bio'

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '96px 24px',
        backgroundColor: 'var(--bg)',
        borderTop: '1px solid var(--bg-border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '12px',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            marginBottom: '12px',
          }}
        >
          {'// get-in-touch'}
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: '34px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}
        >
          Let&apos;s Work Together
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '15px',
            color: 'var(--text-muted)',
            maxWidth: '480px',
            lineHeight: 1.7,
            marginBottom: '44px',
          }}
        >
          Open to new opportunities. If you have a role or project that could be a good fit, I&apos;d love to hear from you.
        </p>

        {/* CTA row */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a
            href={`mailto:${bio.email}`}
            style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              padding: '14px 28px',
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
            Say Hello →
          </a>

          <a
            href={bio.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              padding: '12px 24px',
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
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
