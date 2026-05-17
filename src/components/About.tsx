import { bio } from '@/data/bio'

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '96px 24px',
        borderTop: '1px solid var(--bg-border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '12px',
            color: 'var(--text-accent)',
            letterSpacing: '0.1em',
            marginBottom: '8px',
          }}
        >
          {'// about-me'}
        </p>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '48px',
          }}
        >
          About
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginBottom: '24px',
              }}
            >
              {bio.bio}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {bio.github && (
                <a
                  href={bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '12px',
                    color: 'var(--text-accent)',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                  }}
                >
                  GitHub →
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
                    letterSpacing: '0.05em',
                  }}
                >
                  LinkedIn →
                </a>
              )}
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--bg-border)',
              padding: '24px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '11px',
                color: 'var(--text-muted)',
                marginBottom: '16px',
                letterSpacing: '0.05em',
              }}
            >
              {'> whoami'}
            </p>
            <dl style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'name', value: bio.name },
                { label: 'role', value: bio.role },
                { label: 'email', value: bio.email },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '16px' }}>
                  <dt
                    style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '12px',
                      color: 'var(--text-accent)',
                      minWidth: '48px',
                    }}
                  >
                    {label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '12px',
                      color: 'var(--text-muted)',
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
