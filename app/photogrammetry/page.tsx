import { Footer } from '@/components/site-chrome';

const workflow = [
  'Plan overlap, altitude, and ground sampling distance for the site objective.',
  'Establish ground control and checkpoints where the project requires higher confidence.',
  'Capture consistent imagery for orthomosaic generation and 3D reconstruction.',
  'Process tie points, meshes, and terrain models with QA checks before delivery.',
];

export const metadata = {
  title: 'Photogrammetry',
  description: 'Image overlap, GCPs, orthomosaics, 3D reconstruction, and terrain products.',
};

export default function PhotogrammetryPage() {
  return (
    <>
      <header className="page-header shell">
        <p className="eyebrow">Photogrammetry</p>
        <h1 className="page-title">From overlapped imagery to measurable site models.</h1>
        <p className="page-intro">
          Photogrammetry is the backbone of fast orthomosaic mapping, reconstruction, and
          visual site intelligence.
        </p>
      </header>
      <main className="page shell">
        <section className="card-grid two-up">
          <article className="workflow-card workflow-photo">
            <p className="card-kicker">Workflow</p>
            <h3>Image overlap, GCP control, reconstruction, and export.</h3>
            <p>Used for orthomosaics, meshes, DEMs, progress mapping, and accessible visual review.</p>
          </article>
          <article className="panel">
            <h3>Core deliverables</h3>
            <ul className="stack-list">
              <li>Orthomosaic generation for measurement and context</li>
              <li>3D reconstruction and mesh creation for visualization</li>
              <li>DEM generation for topographic and grading analysis</li>
              <li>Repeatable capture for progress and change detection</li>
            </ul>
          </article>
        </section>
        <section className="section">
          <div className="timeline">
            {workflow.map((step, index) => (
              <div className="timeline-step" key={step}>
                <strong>Workflow {index + 1}</strong>
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
