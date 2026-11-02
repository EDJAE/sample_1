const features = [
  {
    icon: '⚡',
    title: 'Lightning planning',
    description:
      'Turn ideas into structured roadmaps in seconds with smart templates and shortcuts.',
  },
  {
    icon: '🤝',
    title: 'Real-time collaboration',
    description:
      'Comment, edit, and decide together with live presence and instant sync across devices.',
  },
  {
    icon: '📊',
    title: 'Insightful analytics',
    description:
      'Track velocity, spot bottlenecks, and celebrate wins with dashboards that actually make sense.',
  },
  {
    icon: '🔒',
    title: 'Enterprise security',
    description:
      'SSO, granular permissions, and encryption at rest keep your work safe by default.',
  },
  {
    icon: '🔗',
    title: '100+ integrations',
    description:
      'Connect GitHub, Slack, Figma, and the tools your team already loves.',
  },
  {
    icon: '🌙',
    title: 'Calm by design',
    description:
      'A focused interface with dark mode and keyboard-first navigation, built to reduce noise.',
  },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Features</span>
          <h2>Everything you need to move work forward</h2>
          <p>Powerful on its own. Unstoppable together.</p>
        </div>

        <div className="grid features-grid">
          {features.map((feature) => (
            <article className="card reveal" key={feature.title}>
              <div className="card-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
