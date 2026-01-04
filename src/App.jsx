import Header from './components/Header'
import Hero from './components/Hero'
import IntroBlock from './components/IntroBlock'
import Services from './components/Services'
import ZoneIntervention from './components/ZoneIntervention'
import Realisations from './components/Realisations'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <IntroBlock />
        <Services />
        <ZoneIntervention />
        <Realisations />
        <Process />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
