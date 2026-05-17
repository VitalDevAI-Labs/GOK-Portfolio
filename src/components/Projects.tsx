import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '96px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '12px',
          color: 'var(--text-accent)',
          letterSpacing: '0.1em',
          marginBottom: '8px',
        }}
      >
        {'// selected-work'}
      </p>
      <h2
        style={{
          fontSize: '32px',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '48px',
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
