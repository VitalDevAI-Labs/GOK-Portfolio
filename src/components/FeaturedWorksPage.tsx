'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import CategoryFilter from '@/components/CategoryFilter'

function FeaturedWorksContent() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(category)

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section
      style={{
        padding: '80px 24px',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
          <h1
            style={{
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              marginBottom: '12px',
            }}
          >
            Featured Works
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '15px',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            A complete collection of my projects — from fullstack apps to cloud infrastructure.
          </p>
        </div>

        {/* Category filter */}
        <CategoryFilter onCategoryChange={setSelectedCategory} />

        {/* Results count */}
        {filteredProjects.length > 0 && (
          <p
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '12px',
              color: 'var(--text-muted)',
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        )}

        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '24px',
            }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 24px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '16px',
                color: 'var(--text-muted)',
              }}
            >
              No projects found in this category. Try another filter!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default function FeaturedWorksPage() {
  return (
    <Suspense fallback={<div style={{ padding: '80px 24px' }}>Loading...</div>}>
      <FeaturedWorksContent />
    </Suspense>
  )
}
