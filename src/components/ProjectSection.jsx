import './ProjectSection.css'

export default function ProjectSection() {
  return (
    <section className="section" id="project">
      <div className="section-label">
        <span className="tag">build.log</span>
        <h2>Personal project</h2>
      </div>

      <div className="project-card">
        <div className="project-card-head">
          <p className="project-name">Local voice assistant</p>
          <span className="project-stack">Python · speech_recognition · pyttsx3 · Ollama (Llama 3.2)</span>
        </div>
        <p className="project-detail">
          Built a fully local, offline voice assistant on Windows. Implemented threaded text-to-speech
          with mid-speech interrupt handling, and debugged real engine-level issues &mdash; TTS engine
          re-initialization and persona consistency &mdash; the kind of edge cases that only show up
          once you actually run the thing for an hour.
        </p>
        <div className="project-tags">
          <span className="project-tag">Offline-first</span>
          <span className="project-tag">Threaded TTS</span>
          <span className="project-tag">Local LLM</span>
        </div>
      </div>
    </section>
  )
}
