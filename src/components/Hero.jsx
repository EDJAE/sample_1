import { useEffect, useRef } from 'react'

const stats = [
  { target: 42000, suffix: '+', label: 'Teams onboarded' },
  { target: 99, suffix: '.9%', label: 'Uptime' },
  { target: 38, suffix: '%', label: 'Faster delivery' },
]

function animateCounter(el) {
  const target = Number(el.dataset.count) || 0
  const suffix = el.dataset.suffix || ''
  const duration = 1600
  const start = performance.now()
  let frameId = 0

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix
    if (progress < 1) {
      frameId = requestAnimationFrame(tick)
    }
  }

  frameId = requestAnimationFrame(tick)
  return () => cancelAnimationFrame(frameId)
}

export default function Hero() {
  const statsRef = useRef(null)

  useEffect(() => {
    const container = statsRef.current
    if (!container) return undefined

    const counters = Array.from(container.querySelectorAll('[data-count]'))
    const cleanups = []

    if (!('IntersectionObserver' in window)) {
      counters.forEach((counter) => cleanups.push(animateCounter(counter)))
      return () => cleanups.forEach((cleanup) => cleanup())
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cleanups.push(animateCounter(entry.target))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    counters.forEach((counter) => observer.observe(counter))

    return () => {
      observer.disconnect()
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="container hero-inner">
        <span className="badge reveal">New — AI planning assistant is live</span>
        <h1 className="hero-title reveal">
          Plan, build, and ship <span className="gradient-text">faster</span> than ever
        </h1>
        <p className="hero-subtitle reveal">
          Nimbus brings your tasks, docs, and goals into one calm workspace, so your team
          spends less time coordinating and more time creating.
        </p>
        <div className="hero-actions reveal">
          <a href="#cta" className="btn btn-primary btn-lg">
            Start for free
          </a>
          <a href="#features" className="btn btn-outline btn-lg">
            See how it works
          </a>
        </div>
        <p className="hero-note reveal">No credit card required · Free forever plan</p>

        <div className="hero-stats reveal" ref={statsRef}>
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong data-count={stat.target} data-suffix={stat.suffix}>
                0
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
