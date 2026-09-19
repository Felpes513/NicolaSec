import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Relationships from './components/sections/Relationships'
import Solutions from './components/sections/Solutions'
import Services from './components/sections/Services'
import Technologies from './components/sections/Technologies'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Relationships />
        <Solutions />
        <Services />
        <Technologies />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App