const faqs = [
  {
    question: 'Is there really a free plan?',
    answer:
      'Yes. The Starter plan is free forever with up to 3 projects and unlimited tasks.',
  },
  {
    question: 'Can I import data from other tools?',
    answer:
      'Absolutely. We support one-click imports from Trello, Asana, Jira, and CSV files.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Billing is per user, per month, and you can cancel anytime. Annual plans save 20%.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'All data is encrypted in transit and at rest. Enterprise plans include SSO, SCIM, and audit logs.',
  },
]

export default function Faq() {
  return (
    <section className="section section-alt" id="faq">
      <div className="container container-narrow">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Questions? Answered.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item reveal" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
