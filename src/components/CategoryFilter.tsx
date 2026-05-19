'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export interface Category {
  id: string
  label: string
}

export const categories: Category[] = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'design', label: 'Design' },
]

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void
}

export default function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'all') {
      router.push('/featured-works')
    } else {
      router.push(`/featured-works?category=${categoryId}`)
    }
    onCategoryChange?.(categoryId)
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        marginBottom: '48px',
        justifyContent: 'center',
      }}
    >
      {categories.map((category) => {
        const isActive = activeCategory === category.id
        return (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: isActive ? 600 : 500,
              padding: '10px 20px',
              borderRadius: 'var(--radius-pill)',
              border: isActive ? '1px solid var(--text-accent)' : '1px solid rgba(255,255,255,0.06)',
              backgroundColor: isActive ? 'rgba(168,85,247,0.12)' : 'transparent',
              color: isActive ? 'var(--text-accent)' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'
                e.currentTarget.style.backgroundColor = 'rgba(168,85,247,0.06)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--text-muted)'
              }
            }}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
}
