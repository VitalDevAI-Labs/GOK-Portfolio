'use client'

import { bio } from '@/data/bio'

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '60px 24px',
        backgroundColor: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          width: '100%',
          borderRadius: '24px',
          padding: '48px 32px',
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, #1a0a2e 0%, #0d0d1a 50%, #0a0a14 100%)',
          border: '1px solid rgba(168,85,247,0.35)',
          boxShadow: '0 0 0 1px rgba(168,85,247,0.15), 0 0 0 4px rgba(168,85,247,0.08), 0 0 0 10px rgba(168,85,247,0.04), 0 0 60px 20px rgba(168,85,247,0.07), 0 0 120px 60px rgba(100,50,200,0.04)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '28px',
        }}
      >
        {/* Terminal icon */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            border: '1px solid rgba(168,85,247,0.35)',
            backgroundColor: 'rgba(168,85,247,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '8px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '20px',
              color: 'var(--text-accent)',
              letterSpacing: '0.05em',
            }}
          >
            {">_"}
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            margin: 0,
          }}
        >
          Let&apos;s Build Something
          <br />
          <span style={{ color: 'var(--text-accent)', fontStyle: 'italic' }}>Extraordinary.</span>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '16px',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: 0,
          }}
        >
          Currently open for new opportunities, freelance projects, or just a chat about the future of the web.
        </p>

        {/* CTA Button */}
        <a
          href={`mailto:${bio.email}`}
          style={{
            display: 'inline-block',
            padding: '16px 48px',
            borderRadius: '20px',
            backgroundColor: 'rgba(168,85,247,0.20)',
            border: '1px solid rgba(168,85,247,0.40)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'background-color 0.25s ease, box-shadow 0.25s ease, transform 0.15s ease',
            marginTop: '8px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(168,85,247,0.35)'
            e.currentTarget.style.boxShadow = '0 14px 40px rgba(168,85,247,0.25)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(168,85,247,0.20)'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Start a Conversation
        </a>
      </div>
    </section>
  )
}
