'use client'

import Link from 'next/link'
import type { Experience as ExperienceType } from '@/types'
import { experiences } from '@/data/experience'

function TimelineEntry({ exp, index }: { exp: ExperienceType; index: number }) {
  const isRightSide = index % 2 === 0

  return (
    <div
      className="timeline-entry"
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '72px',
        position: 'relative',
      }}
    >
      {/* Left half */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '48px',
        }}
      >
        {isRightSide ? null : <TimelineCard exp={exp} />}
      </div>

      {/* Center node icon */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          flexShrink: 0,
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.04)',
          boxShadow: '0 8px 28px rgba(168,85,247,0.10)',
          color: 'var(--text-accent)',
          fontSize: '18px',
        }}
      >
        ✦
      </div>

      {/* Right half */}
      <div
        style={{
          flex: 1,
          paddingLeft: '48px',
        }}
      >
        {isRightSide ? <TimelineCard exp={exp} /> : null}
      </div>
    </div>
  )
}

function TimelineCard({ exp }: { exp: ExperienceType }) {
  const isActive = exp.current === true

  return (
    <div
      className="timeline-card"
      style={{
        width: '460px',
        maxWidth: '100%',
        backgroundColor: isActive ? 'rgba(168,85,247,0.06)' : 'rgba(255,255,255,0.02)',
        border: isActive ? '1px solid rgba(168,85,247,0.22)' : '1px solid rgba(255,255,255,0.04)',
        borderLeft: isActive ? '4px solid #a855f7' : undefined,
        borderRadius: 'var(--radius-md)',
        padding: '20px',
        boxShadow: isActive ? '0 18px 48px rgba(168,85,247,0.14)' : undefined,
        transition: 'box-shadow 0.25s ease, transform 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.6)'
          e.currentTarget.style.transform = 'translateY(-4px)'
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform = 'translateY(0)'
        }
      }}
    >
      {/* Header row: role + date pill */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '12px',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '20px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {exp.role}
        </h3>
        <span
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '11px',
            fontWeight: 500,
            backgroundColor: 'rgba(255,255,255,0.04)',
            color: 'var(--text-muted)',
            padding: '6px 10px',
            borderRadius: 'var(--radius-pill)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {exp.period}
        </span>
      </div>

      {/* Company */}
      <p
        style={{
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--text-accent)',
          margin: '8px 0 0 0',
        }}
      >
        {exp.company}
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-serif), Georgia, serif',
          fontSize: '14px',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          margin: '12px 0 0 0',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {exp.description}
      </p>
    </div>
  )
}

export default function ExperiencePreview() {
  const featuredExperiences = experiences.slice(0, 2)

  return (
    <section
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
            ✦ Career Journey
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
            Career Journey
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
            The path of continuous learning and building.
          </p>
        </div>

        {/* Timeline (preview - 2 items only) */}
        <div
          className="timeline"
          style={{
            position: 'relative',
            marginBottom: '64px',
          }}
        >
          {/* Vertical center line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              transform: 'translateX(-50%)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {/* Timeline entries (featured only) */}
          {featuredExperiences.map((exp, index) => (
            <TimelineEntry key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* View Full Timeline button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link
            href="/professional-journey"
            style={{
              display: 'inline-block',
              padding: '12px 22px',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'rgba(255,255,255,0.04)',
              color: 'var(--text-primary)',
              border: '1px solid rgba(255,255,255,0.06)',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'box-shadow 0.25s ease, background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a855f7'
              e.currentTarget.style.color = 'var(--bg)'
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.boxShadow = '0 14px 40px rgba(168,85,247,0.14)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.color = 'var(--text-primary)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            View Full Timeline
          </Link>
        </div>
      </div>
    </section>
  )
}
