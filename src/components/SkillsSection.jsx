import './SkillsSection.css'

const GROUPS = [
  {
    name: 'Programming',
    items: ['Python (scripting & automation)', 'C (OOP fundamentals)', 'Java', 'SQL'],
  },
  {
    name: 'Testing methods',
    items: ['Manual testing', 'Functional & regression', 'UAT / SIT', 'Black box', 'Sanity', 'Integration testing'],
  },
  {
    name: 'Tools & platforms',
    items: ['Jira', 'Git', 'Watermelon (autonomous testing)', 'MS Office Suite'],
  },
  {
    name: 'Process',
    items: ['SDLC / STLC', 'Defect lifecycle management', 'Requirements gathering', 'Test planning & execution'],
  },
]

export default function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="section-label">
        <span className="tag">skills.config.json</span>
        <h2>Technical skills</h2>
      </div>

      <div className="skills-grid">
        {GROUPS.map((group) => (
          <div className="skill-group" key={group.name}>
            <p className="skill-group-name">{group.name}</p>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item} className="skill-item">
                  <span className="skill-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
