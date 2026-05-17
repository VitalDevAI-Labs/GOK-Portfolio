'use client'

import type { Project } from '@/types'

const CATEGORY_COLORS: Record<NonNullable<Project['category']>, { bg: string; text: string; border: string }> = {
  genai:     { bg: 'var(--cat-genai-bg)',     text: 'var(--cat-genai-text)',     border: 'var(--cat-genai-border)' },
  fullstack: { bg: 'var(--cat-fullstack-bg)', text: 'var(--cat-fullstack-text)', border: 'var(--cat-fullstack-border)' },
  cloud:     { bg: 'var(--cat-cloud-bg)',     text: 'var(--cat-cloud-text)',     border: 'var(--cat-cloud-border)' },
  design:    { bg: 'var(--cat-design-bg)',    text: 'var(--cat-design-text)',    border: 'var(--cat-design-border)' },
}
const DEFAULT_COLORS = { bg: 'var(--bg-surface)', text: 'var(--text-muted)', border: 'var(--bg-border)' }

export default function ProjectCard({ project }: { project: Project }) {
  const catColors = project.category ? CATEGORY_COLORS[project.category] : DEFAULT_COLORS

  return (
    <article
      style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.22)'
        e.currentTarget.style.boxShadow = '0 18px 48px rgba(168,85,247,0.14)'
        e.currentTarget.style.transform = 'translateY(-6px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Image placeholder — 16:9 ratio */}
      <div style={{ position: 'relative', paddingTop: '56.25%', flexShrink: 0 }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, ${catColors.bg} 0%, rgba(13,13,13,0.4) 100%)`,
          }}
        />
        {project.category && (
          <span
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: catColors.text,
              backgroundColor: catColors.bg,
              border: `1px solid ${catColors.border}`,
              borderRadius: 'var(--radius-pill)',
              padding: '3px 10px',
            }}
          >
            {project.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '20px',
          gap: '12px',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: '20px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: '14px',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '11px',
                color: 'var(--text-muted)',
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 'var(--radius-pill)',
                padding: '3px 10px',
                letterSpacing: '0.03em',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA row — pinned to bottom */}
        <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '4px' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--bg)',
              backgroundColor: 'var(--text-accent)',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            GitHub →
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(168,85,247,0.30)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
