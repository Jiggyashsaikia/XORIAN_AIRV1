import Link from 'next/link';
import { Footer } from '@/components/site-chrome';
import { industries } from '@/lib/site-data';

export const metadata = {
  title: 'Industries',
  description: 'Industry-specific drone surveying workflows for construction, mining, agriculture, and more.',
};

export default function IndustriesPage() {
  return (
    <>
      <header className="page-header shell">
        <p className="eyebrow">Industries</p>
        <h1 className="page-title">Geospatial programs shaped by sector realities.</h1>
        <p className="page-intro">
          Different industries need different capture rhythms, outputs, and accuracy statements.
          Xorian scopes around the actual decisions the data will support.
        </p>
      </header>
      <main className="page shell">
        <div className="industry-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.slug}>
              <p className="card-kicker">Sector</p>
              <h3>{industry.name}</h3>
              <p>{industry.summary}</p>
              <Link className="text-link" href={`/industries/${industry.slug}`}>
                Open sector page
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
