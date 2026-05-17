'use client'

import { bio } from '@/data/bio'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-nav)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--bg-border)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '20px',
            fontWeight: 700,
            color: 'var(--text-accent)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
        >
          {bio.name}
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ul
            style={{
              display: 'flex',
              gap: '28px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--text-accent)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--text-muted)')
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '13px',
              fontWeight: 600,
              color: '#0d0d0d',
              backgroundColor: 'var(--text-accent)',
              textDecoration: 'none',
              padding: '10px 16px',
              borderRadius: 'var(--radius-md)',
              letterSpacing: '0.03em',
              display: 'inline-block',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(168,85,247,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </nav>
  )
}
