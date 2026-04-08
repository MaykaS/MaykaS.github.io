import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Volunteering from '@/components/Volunteering'
import Skills from '@/components/Skills'
import Interests from '@/components/Interests'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Volunteering />
      <Skills />
      <Interests />
      <Blog />
      <Contact />
    </main>
  )
}
