import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const onPointerDown = (event) => {
      if (navRef.current?.contains(event.target)) return
      if (toggleRef.current?.contains(event.target)) return
      setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  const closeNav = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
      <div className="container header-inner">
        <a className="logo" href="#home" aria-label="Nimbus home">
          <span className="logo-mark" aria-hidden="true">
            N
          </span>
          <span className="logo-text">Nimbus</span>
        </a>

        <nav className={`nav${open ? ' open' : ''}`} id="nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={closeNav}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#pricing" className="btn btn-ghost">
            Sign in
          </a>
          <a href="#cta" className="btn btn-primary">
            Get started
          </a>
        </div>

        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
