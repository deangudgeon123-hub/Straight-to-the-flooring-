import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './logo.css'

const services = [
  ['Luxury Vinyl & LVT', 'Clean, durable finishes for busy homes and commercial spaces.'],
  ['Laminate Flooring', 'A sharp, hard-wearing finish installed with careful preparation.'],
  ['Wood Flooring', 'Natural character, precise fitting and a premium finish.'],
  ['Floor Preparation', 'Subfloor prep, levelling and finishing for a floor that lasts.'],
]

const projects = [
  ['Carpet installation', '/images/Carpet1.jpg'],
  ['Flooring installation', '/images/Flooring3.jpg'],
  ['Stair carpet finish', '/images/Stairs2.jpg'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Straight To The Flooring home">
          <img className="brand-logo" src="/images/Logo.PNG" alt="Straight To The Flooring" />
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <button onClick={() => scrollTo('services')}>Services</button>
          <button onClick={() => scrollTo('work')}>Our work</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('quote')}>Contact</button>
          <button className="nav-cta" onClick={() => scrollTo('quote')}>Free quote <span aria-hidden="true">→</span></button>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </header>

      <section id="home" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Professional flooring installation</p>
          <h1>Floors fitted<br/><em>properly.</em></h1>
          <p className="hero-copy">Quality workmanship, careful preparation and a clean finish from the first cut to the final detail.</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => scrollTo('quote')}>Get a free quote <span aria-hidden="true">→</span></button>
            <button className="secondary" onClick={() => scrollTo('work')}>View our work</button>
          </div>
        </div>
        <button className="scroll-cue" onClick={() => scrollTo('services')}>Explore <span aria-hidden="true">↓</span></button>
      </section>

      <section id="services" className="section light">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">What we do</p>
            <h2>Flooring that changes the room.</h2>
          </div>
          <p>From preparation through to the final finish, every job is approached with care and attention to detail.</p>
        </div>
        <div className="service-grid">
          {services.map(([title, text], i) => (
            <article className="service-card" key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section dark-section">
        <div className="section-heading inverse">
          <div>
            <p className="eyebrow">Recent work</p>
            <h2>See the finish for yourself.</h2>
          </div>
          <p>Real installations, real finishes. A closer look at recent flooring work completed with care and attention to detail.</p>
        </div>
        <div className="project-grid">
          {projects.map(([title, image], i) => (
            <article className={`project-card p${i+1}`} key={title} style={{backgroundImage:`linear-gradient(180deg,transparent 35%,rgba(0,0,0,.78)),url(${image})`}}>
              <span>Project 0{i+1}</span>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section split-section">
        <div className="about-image" />
        <div className="about-copy">
          <p className="eyebrow dark">Straight To The Flooring</p>
          <h2>Local service.<br/>Premium finish.</h2>
          <p>A flooring company built around straightforward advice, reliable workmanship and results you are proud to live with.</p>
          <ul>
            {['Free no-obligation quotations','Careful floor preparation','Residential & commercial work','Clean, tidy installation'].map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
          </ul>
          <button className="text-link" onClick={() => scrollTo('quote')}>Talk about your project <span aria-hidden="true">→</span></button>
        </div>
      </section>

      <section className="reviews-section">
        <div className="review-copy">
          <p className="eyebrow">Built on recommendations</p>
          <h2>Good work gets talked about.</h2>
          <div className="stars" aria-label="Five stars">★★★★★</div>
          <p className="review-note">Add genuine Google and Facebook reviews here once the site is live.</p>
        </div>
        <div className="review-card">
          <span>“</span>
          <blockquote>Professional from start to finish. The attention to detail made a massive difference.</blockquote>
          <small>Example review placeholder</small>
        </div>
      </section>

      <section id="quote" className="quote-section">
        <div className="quote-intro">
          <p className="eyebrow dark">Start a project</p>
          <h2>Ready for a new floor?</h2>
          <p>Tell us what you are looking for and we will get back to you about a free quotation.</p>
          <div className="quote-tags"><span>Quick replies</span><span>✓ No obligation</span></div>
        </div>
        <form className="quote-form" onSubmit={(e) => {e.preventDefault(); setSubmitted(true)}}>
          <label>Name<input required placeholder="Your name" /></label>
          <label>Phone<input required placeholder="Your phone number" inputMode="tel" /></label>
          <label>What flooring are you interested in?<select defaultValue=""><option value="" disabled>Select a service</option>{services.map(([s]) => <option key={s}>{s}</option>)}</select></label>
          <label>Tell us about the job<textarea rows={4} placeholder="Room size, flooring type, location, timescale…" /></label>
          <button className="primary" type="submit">Request a quote <span aria-hidden="true">→</span></button>
          {submitted && <p className="demo-note">Demo form received — connect this to his email/WhatsApp before launch.</p>}
        </form>
      </section>

      <footer>
        <div className="footer-brand"><strong>STRAIGHT TO THE FLOORING</strong><span>Quality flooring. Fitted properly.</span></div>
        <div className="footer-links"><button onClick={() => scrollTo('services')}>Services</button><button onClick={() => scrollTo('work')}>Our work</button><button onClick={() => scrollTo('quote')}>Contact</button><span>Instagram</span></div>
        <small>© {new Date().getFullYear()} Straight To The Flooring.</small>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
