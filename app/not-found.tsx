import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page shell" style={{ minHeight: '100svh', display: 'grid', placeItems: 'center' }}>
      <section className="panel" style={{ maxWidth: 680, textAlign: 'center' }}>
        <p className="eyebrow">404</p>
        <h1 className="page-title">No survey route found here.</h1>
        <p className="page-intro">
          The page may have moved while the Xorian platform was being rebuilt.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <Link className="button button-primary" href="/">
            Return home
          </Link>
        </div>
      </section>
    </main>
  );
}
