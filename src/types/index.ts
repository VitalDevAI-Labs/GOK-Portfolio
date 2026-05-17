export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
  category?: 'genai' | 'fullstack' | 'cloud' | 'design'
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Bio {
  name: string
  role: string
  headline: string
  headlineAccentWord: string
  typingWords: string[]
  tagline: string
  bio: string
  email: string
  github?: string
  linkedin?: string
  resumeUrl: string
}
