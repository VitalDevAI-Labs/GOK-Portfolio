'use client'

import { skills } from '@/data/skills'

function SkillChip({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '12px',
        color: 'var(--text-muted)',
        backgroundColor: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.04)',
        borderRadius: 'var(--radius-pill)',
        padding: '8px 14px',
        display: 'inline-block',
        transition: 'box-shadow 0.2s, transform 0.2s, color 0.2s, border-color 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 12px rgba(168,85,247,0.12)'
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.color = 'var(--text-primary)'
        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.20)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.color = 'var(--text-muted)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
      }}
    >
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
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
          {'// tech-stack'}
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
          Skills & Tools
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '24px',
          }}
        >
          {skills.map((group) => (
            <div
              key={group.category}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '11px',
                  color: 'var(--text-accent)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.items.map((item) => (
                  <SkillChip key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
