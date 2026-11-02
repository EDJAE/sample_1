import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Logos from './components/Logos.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
