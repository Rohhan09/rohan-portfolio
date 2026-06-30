import { useEffect, useState } from 'react'
import './TestRunnerHero.css'

const CHECKS = [
  { id: 'profile', label: 'profile.load()', delay: 200 },
  { id: 'experience', label: 'experience.verify()', delay: 650 },
  { id: 'skills', label: 'skills.validate()', delay: 1100 },
  { id: 'compliance', label: 'compliance.check(BFSI)', delay: 1550 },
]

export default function TestRunnerHero({ bootComplete }) {
  const [passed, setPassed] = useState([])

  useEffect(() => {
    const timers = CHECKS.map((check) =>
      setTimeout(() => {
        setPassed((prev) => [...prev, check.id])
      }, check.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <header className="hero">
      <div className="hero-console">
        <div className="console-bar">
          <span className="console-dot" />
          <span className="console-title">run_profile.spec.js</span>
        </div>
        <div className="console-body">
          {CHECKS.map((check) => {
            const isPassed = passed.includes(check.id)
            return (
              <div key={check.id} className="check-line">
                <span className={`check-status ${isPassed ? 'status-pass' : 'status-pending'}`}>
                  {isPassed ? 'PASS' : '....'}
                </span>
                <span className="check-label">{check.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className={`hero-identity ${bootComplete ? 'identity-visible' : ''}`}>
        <p className="eyebrow">Quality assurance engineer · BFSI / Insurance</p>
        <h1>Rohan Shaw</h1>
        <p className="hero-summary">
          Testing the systems that move money and protect policyholders &mdash;
          enterprise software, mobile apps, and regulated insurance platforms.
          Python automation, structured QA process, zero patience for silent defects.
        </p>
        <div className="hero-meta">
          <a href="mailto:shawrohan250@gmail.com" className="meta-item">shawrohan250@gmail.com</a>
          <span className="meta-divider">/</span>
          <a href="https://linkedin.com/in/rohan-shaw-77505723a" target="_blank" rel="noreferrer" className="meta-item">
            linkedin.com/in/rohan-shaw
          </a>
          <span className="meta-divider">/</span>
          <span className="meta-item">West Bengal, India</span>
        </div>
      </div>
    </header>
  )
}
