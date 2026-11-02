const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'For individuals and small side projects.',
    features: ['Up to 3 projects', 'Unlimited tasks', 'Community support'],
    cta: 'Get started',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/month',
    description: 'For growing teams that ship every week.',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      'Custom workflows',
    ],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced needs.',
    features: ['SSO & SCIM', 'Dedicated manager', '99.9% SLA', 'Audit logs'],
    cta: 'Contact sales',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className="section section-alt" id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2>Simple, transparent pricing</h2>
          <p>Start free. Upgrade when your team grows.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`price-card reveal${plan.featured ? ' price-card-featured' : ''}`}
              key={plan.name}
            >
              {plan.featured && <span className="price-tag">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="price">
                <span>{plan.price}</span>
                {plan.period}
              </p>
              <p className="price-desc">{plan.description}</p>
              <ul className="price-list">
                {plan.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`btn btn-block ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
