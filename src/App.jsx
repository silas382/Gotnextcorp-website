import { useState } from 'react'
import founder1 from './assets/images/1748822472322.jpg'
import founder2 from './assets/images/Screenshot 2025-12-06 at 4.23.58 PM.png'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="header">
        <div className="logo-container">
          <div className="logo-icon">
            {/* Simple basketball icon SVG */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M5.636 5.636a9 9 0 0 1 12.728 0M12 2v20M2 12h20M5.636 18.364a9 9 0 0 0 12.728 0"></path>
            </svg>
          </div>
          <div className="logo-text">GotNext</div>
        </div>

        <a href="mailto:gotnextcorp@gmail.com" className="contact-button">
          Contact Us
        </a>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            GotNext Overview
          </button>
          <button
            className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission')}
          >
            GotNext Mission
          </button>
          <button
            className={`tab-button ${activeTab === 'founders' ? 'active' : ''}`}
            onClick={() => setActiveTab('founders')}
          >
            About the Founders
          </button>
        </div>

        {/* TAB: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="tab-panel">
            <div className="hero-section">
              <div className="hero-text">
                <h1>The Future of <span>Pickup Games</span></h1>
                <p>No more waiting on the sideline. No more arguments over who has next. GotNext digitizes the court so you can focus on the game.</p>
                <button className="contact-button" style={{ padding: '0.8rem 1.8rem', fontSize: '1rem', background: 'var(--neon-cyan)', color: 'var(--bg-color)' }}>
                  Join the Waitlist
                </button>
              </div>

              {/* Product Mockup Visualization */}
              <div className="product-display">
                <div className="app-mockup-header">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <div className="app-mockup-body">
                  <div className="mockup-title">
                    <span style={{ color: 'white', fontWeight: 'bold' }}>TEAM 1 <span style={{ background: '#ff6a00', padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem', marginLeft: '10px' }}>READY</span></span>
                    <div className="vs">VS</div>
                    <span style={{ color: 'var(--neon-green)', fontWeight: 'bold' }}>TEAM 2</span>
                  </div>
                  <div className="mockup-team">
                    <div className="mockup-player">N</div>
                    <div className="mockup-player">A</div>
                    <div className="mockup-player">S</div>
                    <div className="mockup-player">J</div>
                    <div className="mockup-player">J</div>
                  </div>
                  <div className="mockup-team" style={{ marginTop: 'auto' }}>
                    <div className="mockup-player green">+</div>
                    <div className="mockup-player green">A</div>
                    <div className="mockup-player green">J</div>
                    <div className="mockup-player empty">+</div>
                    <div className="mockup-player empty">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: MISSION */}
        {activeTab === 'mission' && (
          <div className="tab-panel">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Mission</h2>
            <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <p>At GotNext, our mission is to simplify and elevate the pickup basketball experience. We aim to eliminate confusion, reduce wait times, and bring fairness and structure to every court—so players can focus on what actually matters: the game.</p>
              <p>We believe that something as simple as calling "next" shouldn't lead to arguments or wasted time. By combining intuitive technology with real-world court dynamics, GotNext creates a seamless system that keeps games moving, ensures everyone gets a fair shot, and enhances the overall gym experience.</p>
              <p>Whether you're a casual hooper or a daily regular, GotNext is here to make every run smoother, more organized, and more enjoyable.</p>
            </div>

            <div className="cards-grid">
              <div className="card">
                <div className="card-icon">⚖️</div>
                <h3>Ensure Fairness</h3>
                <p>Stop the arguments over who has next. Our digital queue guarantees that every player gets a fair shot on the court through structured, transparent organization.</p>
              </div>
              <div className="card">
                <div className="card-icon">⚡</div>
                <h3>Eliminate Wait Times</h3>
                <p>Maximize your time playing instead of waiting on the sidelines. Real-time updates keep the games moving seamlessly without the usual confusion.</p>
              </div>
              <div className="card">
                <div className="card-icon">🏀</div>
                <h3>Elevate the Experience</h3>
                <p>Whether you're a casual player or a daily regular, our system reduces friction so you can focus entirely on what matters most: the game itself.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB: FOUNDERS */}
        {activeTab === 'founders' && (
          <div className="tab-panel">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Meet the Team</h2>

            <div className="cards-grid" style={{ justifyContent: 'center', gap: '3rem' }}>
              <div className="card founder-card" style={{ flex: '0 1 400px' }}>
                <div className="founder-avatar" style={{ overflow: 'hidden' }}>
                  <img src={founder1} alt="Co-Founder Product Manager" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3>Nicholas Ghimire</h3>
                <div className="founder-role" style={{ color: 'var(--neon-cyan)' }}>Product Manager @ JPMorgan Chase</div>
                <div style={{ textAlign: 'left', marginTop: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                  <p style={{ margin: '0.5rem 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}><strong style={{ color: 'white' }}>School:</strong> University of Texas at Austin</p>
                  <p style={{ margin: '0.5rem 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}><strong style={{ color: 'white' }}>Major:</strong> Management Information Systems</p>
                  <p style={{ margin: '0.5rem 0', color: 'var(--neon-cyan)' }}><strong style={{ color: 'var(--neon-cyan)' }}>Player Comparison:</strong> Stephen Curry</p>
                </div>
              </div>

              <div className="card founder-card" style={{ flex: '0 1 400px' }}>
                <div className="founder-avatar" style={{ overflow: 'hidden', border: '2px solid var(--neon-orange)' }}>
                  <img src={founder2} alt="Co-Founder Software Engineer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3>Silas Wu</h3>
                <div className="founder-role">Software Engineer @ Blue Cross Blue Shield</div>
                <div style={{ textAlign: 'left', marginTop: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                  <p style={{ margin: '0.5rem 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}><strong style={{ color: 'white' }}>School:</strong> Texas A&M</p>
                  <p style={{ margin: '0.5rem 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}><strong style={{ color: 'white' }}>Major:</strong> Industrial Engineering</p>
                  <p style={{ margin: '0.5rem 0', color: 'var(--neon-orange)' }}><strong style={{ color: 'var(--neon-orange)' }}>Player Comparison:</strong> Giannis Antetokounmpo</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem', maxWidth: '900px', marginInline: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Built by hoopers, for hoopers. We’ve been playing basketball since we were young and have experienced the frustrations of crowded courts and disorganized runs firsthand. From playgrounds, to colleges, to local gyms, to parks—we’ve seen the same problem everywhere. Unclear "next" calls, long wait times, and unnecessary arguments have always been part of the game, no matter where you play.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                By combining our passion for basketball with our professional experience in product management and software engineering, we’re building GotNext to bring structure, fairness, and efficiency to courts everywhere—creating a seamless experience that players can rely on every time they step on the court.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} GotNext Corp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
