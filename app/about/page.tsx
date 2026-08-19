import { Footer } from '@/components/site-chrome';
import { FadeIn } from '@/components/reveal';

export const metadata = {
  title: 'About',
  description: 'About Xorian and the survey, safety, and processing standards behind our work.',
};

export default function AboutPage() {
  return (
    <>
      <header className="page-header shell">
        <p className="eyebrow">About Xorian</p>
        <h1 className="page-title">Built for precision-led survey operations.</h1>
        <p className="page-intro">
          Xorian combines drone operations, geospatial processing, and engineering-minded
          reporting into a delivery model that helps teams move faster with more confidence.
        </p>
      </header>

      <main className="page shell">
        <div className="hero-band">
          <div className="dashboard-grid">
            <article className="panel">
              <p className="card-kicker">Mission</p>
              <h3>Turn field capture into dependable project intelligence.</h3>
              <p>
                We reduce the lag between site activity and usable data by pairing disciplined
                operations with clean deliverables.
              </p>
            </article>
            <article className="panel">
              <p className="card-kicker">Vision</p>
              <h3>Make geospatial visibility standard on every active site.</h3>
              <p>
                Better surveying should not feel exotic. We design programs that become part of
                normal project rhythm.
              </p>
            </article>
            <article className="panel">
              <p className="card-kicker">Why Drone Surveying</p>
              <h3>Faster coverage, safer access, richer context.</h3>
              <p>
                Drones let teams understand large or constrained sites with a speed manual
                workflows cannot match alone.
              </p>
            </article>
          </div>
        </div>

        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Standards</p>
              <h2 className="section-title">Field discipline, safety controls, and processing rigor.</h2>
            </div>
          </div>
          <div className="card-grid three-up">
            <FadeIn>
              <article className="panel">
                <h3>Safety Standards</h3>
                <ul className="stack-list">
                  <li>Pre-flight risk assessments and site briefings</li>
                  <li>Airspace and operational compliance reviews</li>
                  <li>Redundant batteries, observers, and mission logs</li>
                </ul>
              </article>
            </FadeIn>
            <FadeIn delay={0.08}>
              <article className="panel">
                <h3>Technology Stack</h3>
                <ul className="stack-list">
                  <li>RTK-enabled drone platforms and LiDAR payloads</li>
                  <li>GIS publishing and terrain modeling workflows</li>
                  <li>QA checkpoints across acquisition and processing</li>
                </ul>
              </article>
            </FadeIn>
            <FadeIn delay={0.14}>
              <article className="panel">
                <h3>Equipment Showcase</h3>
                <ul className="stack-list">
                  <li>Matrice and enterprise-grade mapping platforms</li>
                  <li>LiDAR, RGB, GNSS, and control-survey hardware</li>
                  <li>Cloud-deliverable packaging for project teams</li>
                </ul>
              </article>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
