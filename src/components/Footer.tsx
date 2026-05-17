import { bio } from '@/data/bio'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--bg-border)',
        padding: '32px 24px',
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
        <span
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '12px',
            color: 'var(--text-muted)',
          }}
        >
          © {new Date().getFullYear()} {bio.name}
        </span>

        <div style={{ display: 'flex', gap: '24px' }}>
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
                letterSpacing: '0.05em',
                transition: 'color 0.2s',
              }}
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
                letterSpacing: '0.05em',
              }}
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
