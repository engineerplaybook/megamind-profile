'use client';

import { useState } from 'react';

interface Project {
  title: string;
  desc: string;
  repo: string;
  img: string;
  gallery: string[];
  category: string;
}

const projects: Project[] = [
  {
    title: 'Healthpool',
    desc: 'An Android Application built in order to provide all the nearby hospitals in case of emergency to a user.',
    repo: 'https://github.com/anmolthukral/healthpool',
    img: '/profile/img/healthpool.png',
    gallery: ['/profile/img/screenshots/hp1.png', '/profile/img/screenshots/hp2.png', '/profile/img/screenshots/hp3.png', '/profile/img/screenshots/hp4.png'],
    category: 'Android Development',
  },
  {
    title: 'Banana',
    desc: 'An Android Application built in order to achieve the short distance communication in mobile phones using bluetooth as medium of transmission.',
    repo: 'https://github.com/anmolthukral/banana',
    img: '/profile/img/banana.png',
    gallery: ['/profile/img/screenshots/ban1.png', '/profile/img/screenshots/ban2.png', '/profile/img/screenshots/ban3.png', '/profile/img/screenshots/ban4.png'],
    category: 'Android Development',
  },
  {
    title: 'DealObar',
    desc: 'A web app that works in order to provide all the deals on ecommerce web site and make shopping easy and saving a happy experience.',
    repo: 'https://github.com/anmolthukral/dealobar',
    img: '/profile/img/dealobar.png',
    gallery: ['/profile/img/screenshots/db1.png', '/profile/img/screenshots/db2.png'],
    category: 'Web Development',
  },
  {
    title: 'Law O Law',
    desc: 'A web app created under value plus legal which is used to automate all the legal services procedures in the indian system and make filling and documentation easy.',
    repo: 'https://github.com/anmolthukral/lawolaw',
    img: '/profile/img/lawolaw.png',
    gallery: ['/profile/img/screenshots/lol1.png', '/profile/img/screenshots/lol2.png'],
    category: 'Web Development',
  },
  {
    title: 'NearBy API',
    desc: 'A python based web api that can be used to provide all the nearby people accessing the system with desired timestamps. Also applications uses google auth for login.',
    repo: 'https://github.com/anmolthukral/nearby-api',
    img: '/profile/img/location.png',
    gallery: [],
    category: 'Python Web API',
  },
  {
    title: 'Mera Campus',
    desc: 'One of the first android projects i have worked on. The system is built in order to provide a common interface to all the existing campuses.',
    repo: 'https://github.com/anmolthukral/mera-campus',
    img: '/profile/img/meracampus.png',
    gallery: [],
    category: 'Android Application',
  },
];

export default function AnmolPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <header className="hero" style={{ minHeight: '80vh', paddingTop: '120px' }}>
        <div className="container">
          <img src="/profile/img/res.png" alt="Anmol Thukral" className="hero-avatar" />
          <h1 className="hero-title">Anmol Thukral</h1>
          <p className="hero-subtitle">Full Stack Web Developer &bull; User Experience Designer &bull; Solutions Expert</p>
          <div className="hero-actions">
            <a
              href="javascript:void(0)"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn"
            >
              View Work <i className="fas fa-arrow-down"></i>
            </a>
            <a href="/profile/static/resume.pdf" className="btn btn-outline" target="_blank" rel="noreferrer">
              View Resume <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <h2 className="section-title">About <span className="text-accent">Me</span></h2>
          <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            I&apos;m a Full Stack Developer with expertise in building scalable web and mobile applications.
            I love creating intuitive user experiences and solving complex problems with elegant solutions.
          </p>
          <div className="text-center">
            <a href="/profile/static/resume.pdf" className="btn btn-outline" style={{ marginTop: '1.5rem' }} target="_blank" rel="noreferrer">View Full Resume</a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section" style={{ background: 'var(--muted)' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>My <span className="text-accent">Work</span></h2>
          <div className="portfolio-grid">
            {projects.map((project, i) => (
              <article
                key={i}
                className="card portfolio-item"
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveProject(project)}
              >
                <img src={project.img} alt={project.title} className="portfolio-thumb" />
                <div style={{ padding: '0 0.5rem 0.5rem' }}>
                  <h3>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{project.category}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">About <span className="text-accent">Me</span></h2>
          <div className="about-grid">
            <div className="about-text">
              <p>Hi, I am Anmol Thukral, a technology enthusiast who works in order to create better design and solutions in the field of Web and mobile technology. I work mostly in Backend fields but am proficient in developing responsive designs when required.</p>
            </div>
            <div className="about-text">
              <p>I pursued my engineering education in the field of Information Technology. I also enjoy creative writing and blogging. Feel free to download my resume to learn more about my professional journey!</p>
              <a href="/profile/static/resume.pdf" className="btn btn-outline" style={{ marginTop: '1.5rem' }} target="_blank" rel="noreferrer">View Full Resume</a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>Get In <span className="text-accent">Touch</span></h2>
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Location</h3>
              <p>Janak Puri,<br />New Delhi, India-110058</p>
            </div>
            <div className="footer-col">
              <h3>Connect</h3>
              <div className="social-links">
                <a href="http://www.facebook.com/an.thukral" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/anthukral" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/anmol-thukral-a15a46a8" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/an.thukral/?hl=en" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="https://www.quora.com/profile/Anmol-Thukral" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-quora"></i></a>
                <a href="https://github.com/anmolthukral" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
                <a href="https://buymeacoffee.com/an.thukral" target="_blank" rel="noreferrer" className="social-icon" aria-label="Buy me a coffee"><i className="fas fa-coffee"></i></a>
                <a href="https://www.npmjs.com/~anmolthukral" target="_blank" rel="noreferrer" className="social-icon" aria-label="npm profile"><i className="fab fa-npm"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Contact</h3>
              <p>+91-7503782099</p>
              <p><a href="mailto:thukral.anmol21@gmail.com" className="text-accent">thukral.anmol21@gmail.com</a></p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <p>&copy; Anmol Thukral. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {activeProject && (
        <div className="modal active" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setActiveProject(null)}>&times;</button>
            <h2 style={{ marginBottom: '0.5rem' }}>{activeProject.title}</h2>
            <img src={activeProject.img} alt={activeProject.title} className="modal-img" />
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{activeProject.desc}</p>

            <a href={activeProject.repo} target="_blank" rel="noreferrer" className="btn" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
              <i className="fab fa-github"></i> View Code
            </a>

            {activeProject.gallery.length > 0 && (
              <div className="modal-gallery" style={{ display: 'grid' }}>
                {activeProject.gallery.map((src, i) => (
                  <img key={i} src={src} alt={`${activeProject.title} screenshot ${i + 1}`} className="modal-gallery-item" />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
