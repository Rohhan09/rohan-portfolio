import './EducationSection.css'

const CERTS = [
  'Programming for Everybody (Getting Started with Python) — University of Michigan',
  'C for Everyone, Part 2: Structured Programming — UC Santa Cruz',
  'The Ultimate SAP S/4HANA Course 2026: From Zero to Expert — Udemy',
]

export default function EducationSection() {
  return (
    <section className="section" id="education">
      <div className="section-label">
        <span className="tag">education.yml</span>
        <h2>Education & certifications</h2>
      </div>

      <div className="edu-row">
        <p className="edu-degree">B.Tech, Information Technology</p>
        <p className="edu-dates">Oct 2021 — Jun 2025</p>
      </div>
      <p className="edu-org">Narula Institute of Technology, West Bengal, India</p>

      <div className="cert-list">
        {CERTS.map((cert) => (
          <div className="cert-item" key={cert}>
            <span className="skill-check">✓</span>
            <span>{cert}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
