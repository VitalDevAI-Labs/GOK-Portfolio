'use client'

import type { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--bg-border)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = 'var(--text-accent)')
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = 'var(--bg-border)')
      }
    >
      <h3
        style={{
          fontSize: '18px',
          fontWeight: 700,
          color: 'var(--text-primary)',
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          flexGrow: 1,
        }}
      >
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {project.techStack.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '11px',
              color: 'var(--badge-text)',
              backgroundColor: 'var(--badge-bg)',
              padding: '3px 10px',
              border: '1px solid var(--bg-border)',
              letterSpacing: '0.03em',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', paddingTop: '4px' }}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '12px',
            color: 'var(--text-accent)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
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
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '12px',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'var(--text-primary)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'var(--text-muted)')
            }
          >
            Live →
          </a>
        )}
      </div>
    </article>
  )
}
