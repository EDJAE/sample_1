const testimonials = [
  {
    quote:
      '“Nimbus replaced three tools for us. Our sprint planning went from hours to minutes.”',
    initials: 'AR',
    name: 'Ava Reyes',
    role: 'Head of Product, Globex',
  },
  {
    quote:
      '“The calmest interface I’ve used. My team actually enjoys updating their tasks now.”',
    initials: 'MK',
    name: 'Marcus Kim',
    role: 'Engineering Lead, Initech',
  },
  {
    quote:
      '“We shipped our biggest release ever two weeks early. Nimbus made the difference.”',
    initials: 'LS',
    name: 'Lena Costa',
    role: 'COO, Hooli',
  },
]

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>Loved by teams everywhere</h2>
        </div>

        <div className="grid testimonials-grid">
          {testimonials.map((item) => (
            <blockquote className="card quote reveal" key={item.name}>
              <p>{item.quote}</p>
              <footer>
                <span className="avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <br />
                  <small>{item.role}</small>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
