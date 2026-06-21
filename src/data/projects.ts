import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'workforce-ai',
    title: 'Enterprise Workforce AI Platform',
    description:
      'Production workforce management system with a custom AI agent orchestration layer. Natural-language queries translate to structured employee data lookups via a purpose-built orchestrator — not a framework — where predefined agents chain step-by-step with one agent\'s output feeding the next. Serving real enterprise clients.',
    techStack: ['Python', 'React', 'MongoDB', 'GCP', 'VPS', 'Custom Agent Orchestration'],
    githubUrl: 'https://github.com/Gowtham-VitalDev',
    featured: true,
    category: 'genai',
  },
  {
    id: 'multi-source-rag',
    title: 'Multi-Source RAG Knowledge Platform',
    description:
      'Knowledge retrieval platform unifying heterogeneous sources — databases, APIs, internal tools, and documents — under a single natural-language interface. Unlike document-only RAG, this reconciles fundamentally different access patterns (DB query vs API call vs embedding lookup) into one coherent ranked answer.',
    techStack: ['Python', 'React', 'RAG', 'Vector DB', 'LLM APIs'],
    githubUrl: 'https://github.com/Gowtham-VitalDev',
    featured: true,
    category: 'genai',
  },
  {
    id: 'unibuilder',
    title: 'UniBuilder — AI Web Builder',
    description:
      'Live production AI-powered website builder. Users generate, edit, and deploy professional web experiences without code. Full end-to-end ownership: architecture, frontend, backend, and deployment.',
    techStack: ['Next.js', 'TypeScript', 'AI APIs'],
    githubUrl: 'https://github.com/Gowtham-VitalDev',
    liveUrl: 'https://unibuilder.in',
    featured: true,
    category: 'genai',
  },
  {
    id: 'interview-pro',
    title: 'Interview PRO',
    description:
      'Real-time AI mock interview platform with a lip-synced streaming avatar conducting live voice interviews. Resume/JD-based question generation via n8n pipeline, sub-200ms voice latency via Agora RTC, and AI-generated structured feedback after each session.',
    techStack: ['Next.js 15', 'TypeScript', 'Convex', 'Clerk', 'AKool SDK', 'Agora', 'Arcjet', 'n8n'],
    githubUrl: 'https://github.com/Gowtham-VitalDev/Interview-PRO',
    featured: true,
    category: 'genai',
  },
  {
    id: 'adgen',
    title: 'ADGEN — AI Video Ads Generator',
    description:
      'Platform that turns a product description into a complete video ad: AI-generated script variants, avatar selection, voice synthesis, and final video rendering. Features a durable 5-step Inngest event pipeline with step-level retry, and an OpenRouter abstraction layer to swap LLM providers without code changes.',
    techStack: ['Next.js 15', 'Convex', 'Inngest', 'Remotion', 'OpenRouter', 'AKool', 'PayPal', 'ImageKit'],
    githubUrl: 'https://github.com/Gowtham-VitalDev/ADGEN',
    featured: false,
    category: 'genai',
  },
  {
    id: 'coassist-pro',
    title: 'My CoAssist Pro',
    description:
      'Multi-persona AI assistant platform with 10 specialized AI personas (Fitness Coach, Code Writer, Bug Finder, Finance Advisor, etc.), each with isolated system instructions, conversation context, and a credit system. EdenAI abstraction routes per-assistant to the right model — Gemini, GPT, or Claude — without SDK changes.',
    techStack: ['Next.js 15', 'TypeScript', 'Convex', 'EdenAI', 'Google Gemini', 'Razorpay', 'Google OAuth'],
    githubUrl: 'https://github.com/Gowtham-VitalDev/My-CoAssist-Pro',
    featured: false,
    category: 'genai',
  },
]
