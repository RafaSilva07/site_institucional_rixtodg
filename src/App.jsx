import Header from './components/Header'
import DarkSectionStack from './components/DarkSectionStack'
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
    <main className="min-h-screen overflow-x-clip bg-[#F5F5F7] pt-24 text-[#111111] md:pt-28">
      <Header />

      <DarkSectionStack previous={<Hero />}>
        <SectionReveal>
          <About />
        </SectionReveal>
      </DarkSectionStack>

      <DarkSectionStack
        disableParallax
        previous={
          <SectionReveal>
            <Team />
          </SectionReveal>
        }
      >
        <SectionReveal>
          <Services />
        </SectionReveal>
      </DarkSectionStack>

      <SectionReveal>
        <Projects />
      </SectionReveal>

      <DarkSectionStack
        previous={
          <SectionReveal>
            <Process />
          </SectionReveal>
        }
      >
        <SectionReveal>
          <Pillars />
        </SectionReveal>
      </DarkSectionStack>

      <SectionReveal>
        <FinalCTA />
      </SectionReveal>

      <Footer />
    </main>
  )
}

export default App
