import Link from 'next/link';

export default function TeamPage() {
  return (
    <>
      <header className="hero" style={{ minHeight: '50vh', paddingTop: '120px', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center">
          <h1 className="hero-title">The Engineering <span className="text-accent">Team</span></h1>
          <p className="hero-subtitle">Meet the minds behind the Engineer Playbook</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' }}>
            <Link href="/profile/anmol-thukral/" style={{ textDecoration: 'none', flex: 1, minWidth: '320px' }}>
              <div className="card h-100 text-center" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <img src="/profile/img/res.png" alt="Anmol Thukral" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '1.5rem', objectFit: 'cover', border: '4px solid var(--accent-color)' }} />
                <h2 className="text-accent" style={{ marginBottom: '0.5rem' }}>Anmol Thukral</h2>
                <p style={{ fontWeight: 500, marginBottom: '1rem', color: 'var(--text-secondary)' }}>Full Stack Developer &amp; UX Designer</p>
                <p style={{ marginBottom: '2rem', opacity: 0.8, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Expert in building scalable web and mobile applications with a focus on user experience and system design.</p>
                <span className="btn" style={{ marginTop: 'auto' }}>View Profile</span>
              </div>
            </Link>

            <Link href="/profile/mouna-ramesh/" style={{ textDecoration: 'none', flex: 1, minWidth: '320px' }}>
              <div className="card h-100 text-center" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <img src="/profile/img/profile_mouna.png" alt="Mouna Ramesh K" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '1.5rem', objectFit: 'fill', objectPosition: 'top', border: '4px solid var(--accent-color)', backgroundColor: 'white' }} />
                <h2 className="text-accent" style={{ marginBottom: '0.5rem' }}>Mouna Ramesh K</h2>
                <p style={{ fontWeight: 500, marginBottom: '1rem', color: 'var(--text-secondary)' }}>Engineering Manager</p>
                <p style={{ marginBottom: '2rem', opacity: 0.8, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Strategic leader with 16+ years of experience scaling high-performing distributed teams and driving digital transformation.</p>
                <span className="btn" style={{ marginTop: 'auto' }}>View Profile</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container text-center">
          <p className="text-secondary text-sm">&copy; 2026 Engineer Playbook. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
