import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'technova',
    role: 'Lead AI Engineer',
    company: 'TechNova Solutions',
    period: '2022 – Present',
    description: 'Leading a team of 5 engineers to architect and deploy generative AI solutions for Fortune 500 clients. Reduced operational costs by 30% through automated RAG pipelines.',
    current: true,
  },
  {
    id: 'quantum',
    role: 'Senior Full Stack Developer',
    company: 'Quantum Data Systems',
    period: '2020 – 2022',
    description: 'Architected a highly scalable microservices platform using Node.js and Go. Improved system throughput by 400% and reduced latency.',
  },
  {
    id: 'innovate',
    role: 'Software Engineer',
    company: 'Innovate AI',
    period: '2018 – 2020',
    description: 'Developed and maintained core features for a predictive analytics dashboard. Integrated early machine learning models into the production pipeline.',
  },
]
