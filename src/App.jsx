import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12 space-y-12">
        {/* Hero Section */}
        <section id="hero" style={{ scrollMarginTop: '80px' }}
        className="h-[autopx] bg-[#1b2838]/40 rounded-2xl p-4">
          <Hero />
        </section>

        {/* About + Tech Stack + Experience */}
        <section className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Left column: About + TechStack */}
          <div className="flex flex-col gap-6">
            {/* About section */}
            <section
              id="about"
              style={{ scrollMarginTop: '80px' }}
              className="bg-[#1b2838]/40 rounded-2xl p-4 flex-1"
            >
              <About />
            </section>

            {/* Tech Stack section */}
            <section
              id="tech"
              style={{ scrollMarginTop: '80px' }}
              className="bg-[#1b2838]/40 rounded-2xl p-4"
            >
              <TechStack />
            </section>
          </div>

          {/* Right column: Experience with internal scrollbar (handled inside component) */}
          <section
            id="experience"
            style={{ scrollMarginTop: '80px' }}
            className="h-[730px] bg-[#1b2838]/40 rounded-2xl p-4"
          >
            <Experience />
          </section>
        </section>

        {/* Projects */}
        <section id="projects" style={{ scrollMarginTop: '80px' }}
        className="h-[autopx] bg-[#1b2838]/40 rounded-2xl p-4">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  )
}
