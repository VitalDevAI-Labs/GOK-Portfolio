import Hero from '@/components/Hero'
import ProjectsPreview from '@/components/sections/ProjectsPreview'
import About from '@/components/About'
import Skills from '@/components/Skills'
import ExperiencePreview from '@/components/sections/ExperiencePreview'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      <About />
      <Skills />
      <ExperiencePreview />
      <Contact />
    </>
  )
}
