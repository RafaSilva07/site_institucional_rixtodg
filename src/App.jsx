import Header from './components/Header'
import SectionDivider from './components/SectionDivider'
import SectionReveal from './components/SectionReveal'

import Hero from './sections/Hero'
import About from './sections/About'
import Team from './sections/Team'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Process from './sections/Process'
import Pillars from './sections/Pillars'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F5F7] pt-24 text-[#111111] md:pt-28">
      <Header />

      <Hero />
      <SectionDivider variant="lightToDark" />

      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionDivider variant="darkToLight" />

      <SectionReveal>
        <Team />
      </SectionReveal>
      <SectionDivider variant="lightToDark" />

      <SectionReveal>
        <Services />
      </SectionReveal>
      <SectionDivider variant="darkToLight" />

      <SectionReveal>
        <Projects />
      </SectionReveal>

      <SectionReveal>
        <Process />
      </SectionReveal>
      <SectionDivider variant="lightToDark" />

      <SectionReveal>
        <Pillars />
      </SectionReveal>
      <SectionDivider variant="darkToLight" />

      <SectionReveal>
        <FinalCTA />
      </SectionReveal>

      <Footer />
    </main>
  )
}

export default App
