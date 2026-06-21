import type { SkillGroup } from '@/types'

export const skills: SkillGroup[] = [
  {
    category: 'AI & Agentic Systems',
    icon: '◈',
    items: [
      'Custom Agent Orchestration',
      'RAG Pipelines',
      'LLM Integration',
      'Prompt Engineering',
      'LangChain',
      'Langflow',
      'OpenAI API',
      'Claude API',
      'OpenRouter',
      'Hugging Face',
      'Fine-tuning (LoRA)',
      'n8n',
    ],
  },
  {
    category: 'Full-Stack Engineering',
    icon: '⬡',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Python',
      'FastAPI',
      'Node.js',
    ],
  },
  {
    category: 'Data & Backend',
    icon: '⚙',
    items: [
      'MongoDB',
      'PostgreSQL',
      'REST APIs',
      'GraphQL',
      'Playwright',
      'Razorpay',
      'PayPal'
    ],
  },
  {
    category: 'Cloud, DevOps & AI Tools',
    icon: '☁',
    items: [
      'AWS (S3, Lambda, EC2)',
      'GCP',
      'VPS',
      'Docker',
      'CI/CD'
    ],
    layout: 'fullwidth',
  },
]
