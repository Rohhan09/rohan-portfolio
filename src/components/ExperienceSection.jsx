import './ExperienceSection.css'

const ASSERTIONS = [
  {
    suite: 'Enterprise system testing — Tata Motors',
    detail:
      'Built and ran detailed test cases for the SAP-based e-Challan test bed, checking system integration, data accuracy, and module-level behaviour.',
    result: 'pass',
  },
  {
    suite: 'Workflow validation — PNB MetLife',
    detail:
      'Validated end-to-end workflows for policy issuance, claims, and compliance on the Life Asia platform, verifying business rules and regulatory alignment.',
    result: 'pass',
  },
  {
    suite: 'Regulatory compliance — Bima Sugam',
    detail:
      'Ran end-to-end testing for the government-mandated Bima Sugam initiative, holding strict adherence to compliance and data-accuracy standards.',
    result: 'pass',
  },
  {
    suite: 'Automation coverage — Watermelon platform',
    detail:
      'Used the Watermelon autonomous testing platform to run no-code functional and regression tests, adding to automation coverage and faster cycles.',
    result: 'pass',
  },
  {
    suite: 'Mobile application testing — iOS',
    detail: 'Found and reported 50+ functional and UI defects under tight delivery timelines.',
    result: 'pass',
    metric: '50+ defects found',
  },
  {
    suite: 'Defect lifecycle management — Jira',
    detail: 'Tracked defects through their full lifecycle with rigorous test case design.',
    result: 'pass',
    metric: '-15% defect leakage',
  },
]

export default function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="section-label">
        <span className="tag">experience.test.js</span>
        <h2>Professional experience</h2>
      </div>

      <div className="role-header">
        <div>
          <p className="role-title">Digital Quality Engineer</p>
          <p className="role-org">QualityKiosk Technologies Pvt. Ltd. — Navi Mumbai, India</p>
        </div>
        <p className="role-dates">May 2025 — Present</p>
      </div>

      <div className="assertions">
        {ASSERTIONS.map((item) => (
          <div className="assertion" key={item.suite}>
            <div className="assertion-head">
              <span className="result-badge">PASS</span>
              <span className="suite-name">{item.suite}</span>
              {item.metric && <span className="metric-pill">{item.metric}</span>}
            </div>
            <p className="assertion-detail">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
