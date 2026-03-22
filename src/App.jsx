import { useState, useEffect, useRef } from 'react'
import founder1 from './assets/images/1748822472322.jpg'
import founder2 from './assets/images/Screenshot 2025-12-06 at 4.23.58 PM.png'
import logoImg from './assets/images/LogoGot copy.png'
import adminVideo from './assets/videos/ADMIN.mp4'
import addStartVideo from './assets/videos/AddStart.mp4'
import adsVideo from './assets/videos/Ads.mp4'
import endGameVideo from './assets/videos/EndGame.mp4'
import './App.css'

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log('Autoplay was prevented by browser:', error);
      });
    }

    const unlock = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(e => console.log(e));
      }
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
    };

    window.addEventListener('click', unlock);
    window.addEventListener('touchstart', unlock);

    return () => {
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
    };
  }, [src]);

  return (
    <video 
      ref={videoRef}
      src={src}
      autoPlay 
      loop 
      muted 
      playsInline 
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
      <div style={{ 
        backgroundColor: 'var(--neon-green)', 
        color: '#000', 
        textAlign: 'center', 
        padding: '0.75rem 1rem', 
        fontWeight: '800', 
        fontSize: '1rem',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        width: '100%',
        boxShadow: '0 4px 15px rgba(0, 255, 136, 0.3)',
        zIndex: 100,
        position: 'relative'
      }}>
        🏀 Coming soon to 24 Hour Fitness in Southlake, TX
      </div>
      <div className="app-container">
      {/* HEADER */}
      <header className="header" style={{ padding: '1rem 0', borderBottom: '1px solid var(--panel-border)', marginBottom: '3rem' }}>
        <div className="logo-container">
          <img src={logoImg} alt="GotNext Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
          <div className="logo-text">Got<span className="logo-highlight">Next</span></div>
        </div>

        <div className="tabs-container" style={{ margin: 0, border: 'none', height: '100%' }}>
          <button
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            GotNext Overview
          </button>
          <button
            className={`tab-button ${activeTab === 'get-gotnext' ? 'active' : ''}`}
            onClick={() => setActiveTab('get-gotnext')}
          >
            Get GotNext Today
          </button>
          <button
            className={`tab-button ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission')}
          >
            GotNext Mission
          </button>
          <button
            className={`tab-button ${activeTab === 'coming-soon' ? 'active' : ''}`}
            onClick={() => setActiveTab('coming-soon')}
          >
            Features Coming Soon
          </button>
          <button
            className={`tab-button ${activeTab === 'founders' ? 'active' : ''}`}
            onClick={() => setActiveTab('founders')}
          >
            Meet the Team
          </button>
        </div>

        <a href="mailto:gotnextcorp@gmail.com?subject=GotNext Inquiry" className="contact-button">
          Contact Us
        </a>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-content">


        {/* TAB: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="tab-panel">
            <div className="hero-section">
              <div className="hero-text">
                <h1>The Future of <span>Pickup Games</span></h1>
                <p>No more waiting on the sideline. No more arguments over who has next. GotNext combines on-court hardware with a seamless digital system to organize queues, track games, and keep runs moving—so players can focus on playing and gyms can deliver a better court experience.</p>
                <a href="mailto:gotnextcorp@gmail.com?subject=Request a Demo" className="contact-button" style={{ display: 'inline-block', padding: '0.8rem 1.8rem', fontSize: '1rem', background: 'var(--neon-cyan)', color: 'var(--bg-color)', textDecoration: 'none' }}>
                  Request a Demo
                </a>
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

            {/* Video Showcase Section */}
            <div className="video-showcase">
              <h2 className="section-title">Experience the <span>Game</span></h2>
              <div className="video-grid">
                {[
                  { id: 'AddStart', title: 'Start a Game Instantly', desc: 'Quickly gather 10 players and get a game going without the usual chaos. GotNext organizes players seamlessly so you can spend less time waiting and more time playing.', file: addStartVideo, fileName: 'AddStart.mp4' },
                  { id: 'EndGame', title: 'Smart Queue & “Next” System', desc: 'Join the queue with a tap and let GotNext handle the rest. When a game ends, the system automatically updates based on winners and keeps runs moving fairly—no arguments, no confusion.', file: endGameVideo, fileName: 'EndGame.mp4' },
                  { id: 'ADMIN', title: 'Gym Customization (Admin Controls)', desc: 'Give gyms full control of their court experience. Admins can easily upload and manage custom visuals, announcements, or branding directly on the screen.', file: adminVideo, fileName: 'ADMIN.mp4' },
                  { id: 'Ads', title: 'Idle Mode with Ads & Game Preview', desc: 'When the court is idle, GotNext turns the screen into a dynamic display—featuring ads alongside a live preview of current players and who’s up next.', file: adsVideo, fileName: 'Ads.mp4' }
                ].map(v => (
                  <div className="video-card" key={v.id}>
                    <div className="video-wrapper">
                      <VideoPlayer src={v.file} />
                    </div>
                    <div className="video-info">
                      <h3>{v.title}</h3>
                      <p>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: GET GOTNEXT IN YOUR GYM */}
        {activeTab === 'get-gotnext' && (
          <div className="tab-panel">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>How It Works</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', textAlign: 'center', maxWidth: '800px', marginInline: 'auto' }}>
              Getting started with GotNext is simple—and we handle everything along the way.
            </p>

            <div className="process-steps" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
              <div style={{ background: 'var(--bg-panel)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--panel-border)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(0, 240, 255, 0.1)', color: 'var(--neon-cyan)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0 }}>1</div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'white' }}>Reach Out</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>Interested gyms get in touch with us to learn more about GotNext and how it can transform their basketball courts.</p>
                </div>
              </div>

              <div style={{ background: 'var(--bg-panel)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--panel-border)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(255, 106, 0, 0.1)', color: 'var(--neon-orange)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0 }}>2</div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'white' }}>See It in Action</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>We walk you through a live demo so you can experience exactly how GotNext works. From organizing runs to keeping games fair and moving, you’ll see the impact right away.</p>
                </div>
              </div>

              <div style={{ background: 'var(--bg-panel)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--panel-border)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(0, 255, 136, 0.1)', color: 'var(--neon-green)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0 }}>3</div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'white' }}>We Handle the Setup</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>No stress, no complications. Our team takes care of the hardware and full installation process, making it completely hassle-free for your gym.</p>
                </div>
              </div>

              <div style={{ background: 'var(--bg-panel)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--panel-border)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(0, 240, 255, 0.1)', color: 'var(--neon-cyan)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0 }}>4</div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'white' }}>Let the Games Begin</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>Once installed, players can jump right in. GotNext keeps games organized, reduces wait times, and creates a smoother, better experience for everyone on the court.</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.05), rgba(255, 106, 0, 0.05))', padding: '4rem 2rem', borderRadius: '24px', border: '1px solid var(--panel-border)' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interested in bringing GotNext to your gym?</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
                Get in touch with us to schedule a demo and see the difference for yourself.
              </p>
              <a href="mailto:gotnextcorp@gmail.com?subject=Gym Partnership Inquiry" className="contact-button" style={{ display: 'inline-block', padding: '1rem 2.5rem', fontSize: '1.1rem', background: 'var(--neon-cyan)', color: 'var(--bg-color)', textDecoration: 'none', fontWeight: 'bold', borderRadius: '30px' }}>
                Reach Out
              </a>
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

        {/* TAB: COMING SOON */}
        {activeTab === 'coming-soon' && (
          <div className="tab-panel">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Features Coming Soon</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', textAlign: 'center', maxWidth: '800px', marginInline: 'auto' }}>
              We're just getting started. Here's a glimpse of what's next for GotNext:
            </p>

            <div className="cards-grid" style={{ marginBottom: '4rem' }}>
              <div className="card" style={{ background: 'linear-gradient(145deg, var(--bg-panel), rgba(0, 240, 255, 0.05))', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
                <div className="card-icon" style={{ background: 'rgba(0, 240, 255, 0.1)', color: 'var(--neon-cyan)' }}>📱</div>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Smart Notifications</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>No more waiting around the court just to hold your spot. Opt in for text message updates and get real-time notifications on game status, so you can stay active and never miss your turn.</p>
              </div>

              <div className="card" style={{ background: 'linear-gradient(145deg, var(--bg-panel), rgba(255, 106, 0, 0.05))', border: '1px solid rgba(255, 106, 0, 0.2)' }}>
                <div className="card-icon" style={{ background: 'rgba(255, 106, 0, 0.1)', color: 'var(--neon-orange)' }}>👤</div>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Player Profiles</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Make every run more personal. Create your own profile and track stats like win-loss record, total games played, and favorite teammates. Customize your avatar and build your identity on the court.</p>
              </div>

              <div className="card" style={{ background: 'linear-gradient(145deg, var(--bg-panel), rgba(0, 255, 136, 0.05))', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
                <div className="card-icon" style={{ background: 'rgba(0, 255, 136, 0.1)', color: 'var(--neon-green)' }}>🏆</div>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>Tournament Creation</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Feeling competitive? Easily create and manage your own tournaments right within GotNext. Customize formats, set matchups, and bring a March Madness–style experience to your gym—no extra tools needed.</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', background: 'rgba(255, 255, 255, 0.02)', padding: '3rem', borderRadius: '16px', border: '1px dashed var(--panel-border)' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--neon-cyan)', marginBottom: '1rem' }}>And More on the Way…</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', marginInline: 'auto', lineHeight: '1.6' }}>
                We’re in the early stages of building GotNext and constantly working to bring new features that make the game more organized, competitive, and fun. Stay tuned—this is just the beginning.
              </p>
            </div>
          </div>
        )}

        {/* TAB: FOUNDERS */}
        {activeTab === 'founders' && (
          <div className="tab-panel">
            <div className="cards-grid" style={{ justifyContent: 'center', gap: '3rem' }}>
              <div className="card founder-card" style={{ flex: '0 1 400px' }}>
                <div className="founder-avatar" style={{ overflow: 'hidden' }}>
                  <img src={founder1} alt="Co-Founder Product Manager" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3>Nicholas Ghimire</h3>
                <div className="founder-role" style={{ color: 'var(--neon-cyan)' }}>
                  Product Manager @ JPMorgan Chase<br/>
                  <span style={{ color: 'white', display: 'inline-block', marginTop: '0.4rem' }}>Co-Founder of GotNext</span>
                </div>
                <div style={{ textAlign: 'left', marginTop: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                  <p style={{ margin: '0', color: 'var(--neon-cyan)' }}><strong style={{ color: 'var(--neon-cyan)' }}>Player Comparison:</strong> Stephen Curry</p>
                </div>
              </div>

              <div className="card founder-card" style={{ flex: '0 1 400px' }}>
                <div className="founder-avatar" style={{ overflow: 'hidden', border: '2px solid var(--neon-orange)' }}>
                  <img src={founder2} alt="Co-Founder Software Engineer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3>Silas Wu</h3>
                <div className="founder-role">
                  Software Engineer @ Blue Cross Blue Shield<br/>
                  <span style={{ color: 'white', display: 'inline-block', marginTop: '0.4rem' }}>Co-Founder of GotNext</span>
                </div>
                <div style={{ textAlign: 'left', marginTop: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                  <p style={{ margin: '0', color: 'var(--neon-orange)' }}><strong style={{ color: 'var(--neon-orange)' }}>Player Comparison:</strong> Giannis Antetokounmpo</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem', maxWidth: '900px', marginInline: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ fontSize: '1.1rem', color: 'white', lineHeight: '1.6' }}>
                Built by hoopers, for hoopers. We’ve been playing basketball since we were young and have experienced the frustrations of crowded courts and disorganized runs firsthand. From playgrounds, to colleges, to local gyms, to parks—we’ve seen the same problem everywhere. Unclear "next" calls, long wait times, and unnecessary arguments have always been part of the game, no matter where you play.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'white', lineHeight: '1.6' }}>
                By combining our passion for basketball with our professional experience in product management and software engineering, we’re building GotNext to bring structure, fairness, and efficiency to courts everywhere—creating a seamless experience that players can rely on every time they step on the court.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'white', lineHeight: '1.6' }}>
                We’re still in the early stages of building GotNext, and that’s what excites us most. We’re constantly learning, listening to players and gyms, and improving the product every day. This isn’t just something we’re building—it’s something we genuinely care about, and we’re committed to making the basketball experience better for every community we reach.
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
    </>
  )
}

export default App
