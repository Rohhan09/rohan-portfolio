import './Footer.css'

export default function Footer({ visible }) {
  return (
    <footer className={`footer ${visible ? 'footer-visible' : ''}`}>
      <span>Test suite completed — 4 passed, 0 failed</span>
      <span className="footer-dot">·</span>
      <a href="mailto:shawrohan250@gmail.com">Get in touch</a>
    </footer>
  )
}
