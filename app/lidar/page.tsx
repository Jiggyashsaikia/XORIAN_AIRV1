import { Footer } from '@/components/site-chrome';

const steps = [
  'Pulse emission and return timing generate a dense point cloud.',
  'Classification separates ground, structures, canopy, and utilities.',
  'DTM and DSM products support terrain and surface analysis.',
  'Canopy and corridor analysis become possible even in harder terrain.',
];

export const metadata = {
  title: 'LiDAR',
  description: 'How Xorian uses drone LiDAR for classification, terrain models, and canopy-aware mapping.',
};

export default function LidarPage() {
  return (
    <>
      <header className="page-header shell">
        <p className="eyebrow">LiDAR Mapping</p>
        <h1 className="page-title">Laser-driven capture for dense, classification-ready datasets.</h1>
        <p className="page-intro">
          LiDAR excels where terrain complexity, vegetation, and vertical intelligence matter
          more than imagery alone.
        </p>
      </header>
      <main className="page shell">
        <section className="card-grid two-up">
          <article className="workflow-card workflow-lidar">
            <p className="card-kicker">How It Works</p>
            <h3>Pulse, return, classify, model.</h3>
            <p>We build point cloud products that support DTM, DSM, canopy, and inspection needs.</p>
          </article>
          <article className="panel">
            <h3>Advantages over traditional surveying</h3>
            <ul className="stack-list">
              <li>Faster coverage over large or inaccessible terrain</li>
              <li>Higher repeatability for monitoring programs</li>
              <li>Richer terrain understanding in vegetated conditions</li>
              <li>Safer capture on corridors and constrained infrastructure sites</li>
            </ul>
          </article>
        </section>
        <section className="section">
          <div className="timeline">
            {steps.map((step, index) => (
              <div className="timeline-step" key={step}>
                <strong>Stage {index + 1}</strong>
                <span className="section-copy">{step}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
