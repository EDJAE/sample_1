const companies = ['Acme', 'Globex', 'Initech', 'Umbrella', 'Hooli']

export default function Logos() {
  return (
    <section className="logos">
      <div className="container">
        <p className="logos-label">Trusted by teams at</p>
        <div className="logos-row">
          {companies.map((company) => (
            <span key={company}>{company}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
