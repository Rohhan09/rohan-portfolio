import { useEffect, useState } from 'react'
import TestRunnerHero from './components/TestRunnerHero.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import EducationSection from './components/EducationSection.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  const [bootComplete, setBootComplete] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setBootComplete(true), 1900)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="page">
      <TestRunnerHero bootComplete={bootComplete} />
      <main className={`content ${bootComplete ? 'content-visible' : ''}`}>
        <ExperienceSection />
        <SkillsSection />
        <ProjectSection />
        <EducationSection />
      </main>
      <Footer visible={bootComplete} />
    </div>
  )
}
