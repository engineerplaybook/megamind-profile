import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 20px 40px', textAlign: 'center', minHeight: '70vh' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>404</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
        Engineer Playbook doesn&apos;t have this yet, or you are lost, but you can request a feature by reaching out to maintainers directly.
      </p>
      <Link href="/profile/" className="btn" style={{ textDecoration: 'none' }}>Go to Playbook Profile</Link>
    </main>
  );
}
