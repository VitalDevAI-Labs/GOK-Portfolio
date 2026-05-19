import type { SkillGroup } from '@/types'

export const skills: SkillGroup[] = [
  {
    category: 'Frontend Engineering',
    icon: '⬡',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion'],
  },
  {
    category: 'Backend & Systems',
    icon: '⚙',
    items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  },
  {
    category: 'AI & Machine Learning',
    icon: '◈',
    items: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenAI API', 'HuggingFace', 'Computer Vision'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁',
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Vercel'],
    layout: 'fullwidth',
  },
]
