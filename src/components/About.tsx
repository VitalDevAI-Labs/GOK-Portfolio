'use client'

import { bio } from '@/data/bio'

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        backgroundColor: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '22px',
          fontWeight: 700,
          color: 'var(--text-accent)',
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '10px',
          color: 'var(--text-muted)',
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
    </div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '96px 24px',
        backgroundColor: 'var(--bg)',
        borderTop: '1px solid var(--bg-border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section label */}
        <p
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '12px',
            color: 'var(--text-accent)',
            letterSpacing: '0.1em',
            marginBottom: '12px',
            textAlign: 'center',
          }}
        >
          ✦ About Me
        </p>

        {/* Main grid: 2 columns (text left, avatar right) */}
        <div className="about-grid">
          {/* LEFT — text content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif), Georgia, serif',
                fontSize: '40px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                marginBottom: '12px',
              }}
            >
              About Me
            </h2>

            {/* Bio paragraphs */}
            {bio.aboutParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  fontFamily: 'var(--font-serif), Georgia, serif',
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  maxWidth: '680px',
                  marginBottom: idx < bio.aboutParagraphs.length - 1 ? '0' : '0',
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Stats row */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '24px',
                marginTop: '24px',
                flexWrap: 'wrap',
              }}
            >
              <StatBadge value="10+" label="YEARS EXPERIENCE" />
              <StatBadge value="50+" label="PROJECTS SHIPPED" />
              <StatBadge value={`${bio.aiModels}+`} label="AI MODELS" />
            </div>
          </div>

          {/* RIGHT — avatar with rings and badges */}
          <div
            className="about-avatar-group"
            style={{
              position: 'relative',
              width: '280px',
              height: '280px',
              margin: '0 auto',
              flexShrink: 0,
            }}
          >
            {/* Outer decorative ring */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '-15px',
                borderRadius: '50%',
                border: '6px solid rgba(168,85,247,0.08)',
                pointerEvents: 'none',
              }}
            />

            {/* Inner decorative ring */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '-8px',
                borderRadius: '50%',
                border: '2px solid rgba(168,85,247,0.12)',
                pointerEvents: 'none',
              }}
            />

            {/* Avatar circle */}
            <div
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid rgba(168,85,247,0.14)',
                boxShadow: '0 16px 48px rgba(168,85,247,0.16)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '56px',
                  fontWeight: 700,
                  color: 'var(--text-accent)',
                  letterSpacing: '-0.05em',
                }}
              >
                GOK
              </span>
            </div>

            {/* Badge: Years Experience (top-left) */}
            <div
              style={{
                position: 'absolute',
                top: '-8px',
                left: '-16px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid rgba(168,85,247,0.18)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                zIndex: 2,
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: '14px', color: 'var(--text-accent)' }}>★</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--text-accent)',
                    lineHeight: 1,
                  }}
                >
                  5+
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '9px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                    lineHeight: 1,
                  }}
                >
                  YEARS EXP
                </span>
              </div>
            </div>

            {/* Badge: AI Models (right-middle) */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: '-24px',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid rgba(168,85,247,0.18)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                zIndex: 2,
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: '14px', color: 'var(--text-accent)' }}>◈</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--text-accent)',
                    lineHeight: 1,
                  }}
                >
                  20+
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '9px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                    lineHeight: 1,
                  }}
                >
                  AI MODELS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
