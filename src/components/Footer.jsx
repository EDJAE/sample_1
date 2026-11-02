const year = new Date().getFullYear()

const links = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#cta', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="logo" href="#home" aria-label="Nimbus home">
          <span className="logo-mark" aria-hidden="true">
            N
          </span>
          <span className="logo-text">Nimbus</span>
        </a>
        <nav className="footer-nav" aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <p className="footer-copy">© {year} Nimbus. All rights reserved.</p>
      </div>
    </footer>
  )
}
