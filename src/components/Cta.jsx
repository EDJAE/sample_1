import { useState } from 'react'

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}

export default function Cta() {
  const [email, setEmail] = useState('')
  const [invalid, setInvalid] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (event) => {
    setEmail(event.target.value)
    setInvalid(false)
    if (message.type === 'error') {
      setMessage({ type: '', text: '' })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = email.trim()

    if (!isValidEmail(value)) {
      setInvalid(true)
      setMessage({ type: 'error', text: 'Please enter a valid email address.' })
      return
    }

    setInvalid(false)
    setMessage({
      type: 'success',
      text: `Thanks! Check ${value} to finish setting up your workspace.`,
    })
    setEmail('')
  }

  return (
    <section className="cta" id="cta">
      <div className="container cta-inner">
        <h2>Ready to ship faster?</h2>
        <p>Join 42,000+ teams already planning their best work with Nimbus.</p>
        <form className="cta-form" id="cta-form" onSubmit={handleSubmit} noValidate>
          <label className="sr-only" htmlFor="email">
            Work email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            value={email}
            onChange={handleChange}
            className={invalid ? 'invalid' : ''}
            required
          />
          <button type="submit" className="btn btn-primary btn-lg">
            Get started free
          </button>
        </form>
        <p className={`form-message ${message.type}`} role="status" aria-live="polite">
          {message.text}
        </p>
      </div>
    </section>
  )
}
