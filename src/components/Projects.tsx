import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '80px 24px',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '12px',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                marginBottom: '12px',
              }}
            >
              {'// featured-work'}
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif), Georgia, serif',
                fontSize: '34px',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                marginBottom: '8px',
              }}
            >
              Featured Work
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '15px',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
              }}
            >
              A selection of projects I&apos;ve shipped.
            </p>
          </div>

          <a
            href="#projects"
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '13px',
              color: 'var(--text-accent)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            View All →
          </a>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
