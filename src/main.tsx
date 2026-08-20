import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './logo.css'
import './contact.css'

const services = [
  ['Luxury Vinyl & LVT', 'Clean, durable finishes for busy homes and commercial spaces.'],
  ['Laminate Flooring', 'A sharp, hard-wearing finish installed with careful preparation.'],
  ['Wood Flooring', 'Natural character, precise fitting and a premium finish.'],
  ['Carpet', 'Comfortable, professionally fitted carpet for rooms, halls, stairs and landings.'],
  ['Safety Flooring', 'Durable, slip-resistant flooring solutions for commercial and practical spaces.'],
  ['Floor Preparation', 'Subfloor prep, levelling and finishing for a floor that lasts.'],
]

const projects = [
  ['Carpet installation', '/images/Carpet1.jpg?v=2'],
  ['Flooring installation', '/images/Flooring3.jpg?v=2'],
  ['Stair carpet finish', '/images/Stairs2.jpg?v=2'],
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
          <p className="review-note">100% recommended on Facebook, with genuine customer feedback from completed jobs.</p>
        </div>
        <div className="review-list">
          <div className="review-card">
            <span>“</span>
            <blockquote>Speedy, efficient, trouble free service from start to finish. Great communication & very reasonably priced. Highly recommend.</blockquote>
            <small>Lynn Wilson · Facebook recommendation</small>
          </div>
          <div className="review-card">
            <span>“</span>
            <blockquote>Brilliant service! The boys were amazing, worked bloody hard with my difficult old house! Cracking job, thank you.</blockquote>
            <small>Gemma Warren · Facebook recommendation</small>
          </div>
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

      <section className="contact-cta-section" aria-label="Contact Straight To The Flooring">
        <div className="contact-cta-copy">
          <p className="eyebrow dark">Get in touch</p>
          <h2>Ready to talk flooring?</h2>
          <p>Call, email or message us on social media and we’ll get back to you about your project.</p>
        </div>
        <div className="contact-cta-grid">
          <a className="contact-cta-card" href="tel:07858533237">
            <span className="contact-cta-label">Call now</span>
            <strong>07858 533237</strong>
            <span className="contact-cta-arrow" aria-hidden="true">→</span>
          </a>
          <a className="contact-cta-card" href="mailto:straighttotheflooring@yahoo.com">
            <span className="contact-cta-label">Email us</span>
            <strong>straighttotheflooring@yahoo.com</strong>
            <span className="contact-cta-arrow" aria-hidden="true">→</span>
          </a>
          <a className="contact-cta-card" href="https://www.instagram.com/straight_to_the_flooring?igsi=MTB5eWlsbmM0cTZodg==" target="_blank" rel="noreferrer">
            <span className="contact-cta-label">Follow us</span>
            <strong>Instagram</strong>
            <span className="contact-cta-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="contact-cta-card" href="https://www.facebook.com/share/14rtfwyF49f/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
            <span className="contact-cta-label">Find us on</span>
            <strong>Facebook</strong>
            <span className="contact-cta-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><strong>STRAIGHT TO THE FLOORING</strong><span>Quality flooring. Fitted properly.</span></div>
        <div className="footer-links"><button onClick={() => scrollTo('services')}>Services</button><button onClick={() => scrollTo('work')}>Our work</button><button onClick={() => scrollTo('quote')}>Contact</button><a href="https://www.instagram.com/straight_to_the_flooring?igsi=MTB5eWlsbmM0cTZodg==" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/share/14rtfwyF49f/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Facebook</a></div>
        <small>© {new Date().getFullYear()} Straight To The Flooring.</small>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
