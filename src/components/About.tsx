'use client'

import { bio } from '@/data/bio'

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
        {/* Section label + heading */}
        <p
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '12px',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            marginBottom: '12px',
          }}
        >
          {'// about-me'}
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: '34px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            marginBottom: '48px',
          }}
        >
          About Me
        </h2>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Left — bio text + social links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '16px',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
              }}
            >
              {bio.bio}
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {bio.github && (
                <a
                  href={bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    padding: '9px 18px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(168,85,247,0.30)'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(168,85,247,0.10)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  GitHub ↗
                </a>
              )}
              {bio.linkedin && (
                <a
                  href={bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    padding: '9px 18px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(168,85,247,0.30)'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(168,85,247,0.10)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  LinkedIn ↗
                </a>
              )}
              <a
                href={bio.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--bg)',
                  backgroundColor: 'var(--text-accent)',
                  textDecoration: 'none',
                  padding: '9px 18px',
                  borderRadius: 'var(--radius-md)',
                  transition: 'box-shadow 0.2s, transform 0.15s',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(168,85,247,0.35)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Resume ↓
              </a>
            </div>
          </div>

          {/* Right — terminal whoami card */}
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '12px',
                color: 'var(--text-accent)',
                marginBottom: '20px',
                letterSpacing: '0.05em',
              }}
            >
              {'> whoami'}
            </p>
            <dl style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'name', value: bio.name },
                { label: 'role', value: bio.role },
                { label: 'email', value: bio.email },
                { label: 'status', value: 'open to work' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
                  <dt
                    style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '12px',
                      color: 'var(--text-accent)',
                      minWidth: '56px',
                      flexShrink: 0,
                    }}
                  >
                    {label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '12px',
                      color: label === 'status' ? '#4ade80' : 'var(--text-muted)',
                    }}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
