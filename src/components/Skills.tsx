'use client'

import type { SkillGroup } from '@/types'
import { skills } from '@/data/skills'

function SkillChip({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--text-primary)',
        backgroundColor: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.04)',
        borderRadius: 'var(--radius-pill)',
        padding: '8px 12px',
        display: 'inline-block',
        transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s',
        cursor: 'default',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 12px rgba(168,85,247,0.12)'
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.20)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
      }}
    >
      {label}
    </span>
  )
}

function SkillGroupCard({ group, fullwidth = false }: { group: SkillGroup; fullwidth?: boolean }) {
  return (
    <div
      className={fullwidth ? 'skills-card-fullwidth' : undefined}
      style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 'var(--radius-md)',
        padding: '20px',
        transition: 'box-shadow 0.25s ease, border-color 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 18px 48px rgba(168,85,247,0.12)'
        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.22)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Icon + Title row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(168,85,247,0.08)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '18px',
            flexShrink: 0,
          }}
        >
          {group.icon}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          {group.category}
        </h3>
      </div>

      {/* Chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {group.items.map((item) => (
          <SkillChip key={item} label={item} />
        ))}
      </div>
    </div>
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
        {/* Centered header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '12px',
              color: 'var(--text-accent)',
              letterSpacing: '0.1em',
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}
          >
            ✦ Technical Arsenal
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontSize: '40px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              marginBottom: '12px',
            }}
          >
            Technical Arsenal
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '15px',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            A comprehensive toolkit for building modern, intelligent, and scalable applications.
          </p>
        </div>

        {/* Skills grid: 3 columns with full-width cloud row */}
        <div className="skills-grid">
          {skills.map((group) => (
            <SkillGroupCard
              key={group.category}
              group={group}
              fullwidth={group.layout === 'fullwidth'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
