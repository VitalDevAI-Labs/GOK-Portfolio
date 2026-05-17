import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Dev Task Manager',
    description:
      'A full-stack task management app with real-time updates, team collaboration, and smart prioritization. Built to solve the overhead of context-switching between tools.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'CLI File Organizer',
    description:
      'A Node.js CLI tool that automatically organizes project directories by file type, date, or custom rules. Reduced manual file management time by 80%.',
    techStack: ['Node.js', 'TypeScript', 'Commander.js'],
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'API Rate Limiter',
    description:
      'A reusable Express middleware for token-bucket rate limiting with Redis-backed distributed state. Handles burst traffic gracefully across multiple server instances.',
    techStack: ['Node.js', 'Express', 'Redis', 'TypeScript'],
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'project-4',
    title: 'Portfolio Site',
    description:
      'This site — built with Next.js 15, Tailwind CSS v4, and a dark terminal aesthetic. Content managed via local TypeScript data files, deployed on Vercel.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
]
