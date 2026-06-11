'use client';

export default function MounaPage() {
  return (
    <>
      <header className="hero" style={{ minHeight: '60vh', paddingTop: '120px' }}>
        <div className="container text-center">
          <img
            className="hero-avatar"
            src="/profile/img/profile_mouna.png"
            alt="Mouna Ramesh K"
            style={{ width: '200px', height: '200px', borderRadius: '50%', margin: '0 auto 2rem', objectFit: 'fill', objectPosition: 'top', border: '4px solid var(--accent-color)', display: 'block', backgroundColor: 'white' }}
          />
          <h1 className="hero-title">Mouna Ramesh K</h1>
          <p className="hero-subtitle">Engineering Manager &bull; Strategic Leader &bull; Technology Innovator</p>
          <div className="hero-actions">
            <a
              href="javascript:void(0)"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn"
            >
              View Experience <i className="fas fa-arrow-down"></i>
            </a>
            <a href="/profile/static/mouna-resume.pdf" className="btn btn-outline" target="_blank" rel="noreferrer">
              View Resume <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </header>

      <section className="section" style={{ background: 'var(--muted)' }}>
        <div className="container text-center">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '0.5rem' }}>16+</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Years Experience</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '0.5rem' }}>24+</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Team Members Led</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '0.5rem' }}>6+</h2>
              <p style={{ color: 'var(--text-secondary)' }}>SaaS Solutions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Strategic <span className="text-accent">Expertise</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div className="card text-center" style={{ border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                <i className="fas fa-users-gear"></i>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Leadership</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Remote Team Leadership, OKRs, Strategic Partnerships, Budgeting &amp; P&amp;L.</p>
            </div>
            <div className="card text-center" style={{ border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                <i className="fas fa-cloud-bolt"></i>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Engineering</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Cloud Architecture, Quality Engineering, SRE, Datadog/Grafana Observability.</p>
            </div>
            <div className="card text-center" style={{ border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Innovation</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>GenAI Adoption, Microservices, IoT Integration, Product Vision.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Professional <span className="text-accent">Milestones</span></h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                title: 'Manager \u2013 Software Development',
                company: 'First American India',
                period: '2023 \u2013 Present',
                description: 'Leading engineering transformation for a Fortune 500 title insurance provider. Scaling high-performance teams and building an AI-first culture.',
                highlights: [
                  'Scaled team from 7 to 24 members while maintaining zero production incidents.',
                  'Reduced performance analysis time by 92% through strategic AI adoption.',
                  'Optimized infrastructure to achieve $60K annual cost savings.',
                ],
              },
              {
                title: 'Technical Manager',
                company: 'Happiest Minds Technologies',
                period: '2015 \u2013 2023',
                description: 'Directed delivery for a Fortune 500 identity security client, managing 7 scrum teams and driving microservices adoption.',
                highlights: [
                  'Established benchmarks in technical excellence and received Innovation awards.',
                  'Drove program management lifecycle and stakeholder alignment for enterprise solutions.',
                  'Pioneered observability best practices across distributed systems.',
                ],
              },
              {
                title: 'Software Developer',
                company: 'Fidelity National Financial',
                period: '2009 \u2013 2015',
                description: 'Developed enterprise platforms across title insurance, mortgage systems, and industrial IoT applications.',
                highlights: [
                  'Built IoT solutions integrating industrial devices using Azure IoT Hub and AWS IoT, enabling real-time analytics and monitoring.',
                  'Contributed across full software development lifecycle including architecture, development, deployment, and support.',
                ],
              },
            ].map((role, i) => (
              <div key={i} className="card" style={{ marginBottom: '2rem', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem', fontSize: '1.5rem' }}>{role.title}</h3>
                    <p style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: 0 }}>{role.company}</p>
                  </div>
                  <span className="badge" style={{ background: 'var(--accent-color)', color: 'white' }}>{role.period}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{role.description}</p>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                  {role.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container text-center">
          <p className="text-secondary text-sm">&copy; 2026 Mouna Ramesh K. Part of the Engineer Playbook Team.</p>
        </div>
      </footer>
    </>
  );
}
