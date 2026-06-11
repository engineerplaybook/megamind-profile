import React from 'react';

const blogs = [
  {
    date: 'January 28, 2026',
    title: 'Frontend Performance: The React Paradigm',
    excerpt: 'A comprehensive examination of frontend performance, focusing on systemic issues rather than just React-specific limitations.',
    url: '/profile/blogs/comprehensive-performance-analysis.html',
  },
  {
    date: 'January 28, 2026',
    title: 'useEffect vs. useLayoutEffect',
    excerpt: 'Choosing the right effect hook is key to avoiding subtle bugs and UI jank in React applications. Understand the difference.',
    url: '/profile/blogs/useeffect-vs-uselayouteffect.html',
  },
  {
    date: 'January 28, 2026',
    title: 'Debunking useTransition',
    excerpt: 'useTransition is a tool in React\u2019s arsenal that helps you to render some part of the UI in the background...',
    url: '/profile/blogs/debunking-usetransition.html',
  },
  {
    date: 'January 28, 2026',
    title: 'React Like a Ninja',
    excerpt: 'A good React code always follows specific principles to make your applications clean, performant, and scalable.',
    url: '/profile/blogs/react-like-a-ninja.html',
  },
];

export default function BlogsPage() {
  return (
    <>
      <header className="section" style={{ paddingTop: '10rem', paddingBottom: '2rem' }}>
        <div className="container text-center">
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>My Blogs</h1>
          <p className="hero-subtitle">Thoughts, tutorials, and insights on web development.</p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="blog-grid">
            {blogs.map((blog, i) => (
              <article key={i} className="blog-card">
                <div className="blog-card-content">
                  <span className="blog-date">{blog.date}</span>
                  <h2 className="blog-card-title">{blog.title}</h2>
                  <p className="blog-card-excerpt">{blog.excerpt}</p>
                  <a href={blog.url} className="read-more">
                    Read Article <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <p>&copy; Anmol Thukral. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
