import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import WorkHistory from '@/components/WorkHistoryFixed'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import SocialStats from '@/components/SocialStats'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Projects />
      <WorkHistory />
      <Skills />
      <Services />
      <SocialStats />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
} 