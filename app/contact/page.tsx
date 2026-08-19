import { QuoteRequestForm } from '@/components/forms';
import { Footer } from '@/components/site-chrome';

export const metadata = {
  title: 'Contact',
  description: 'Request a survey, share your site requirements, and start a quote.',
};

export default function ContactPage() {
  return (
    <>
      <header className="page-header shell">
        <p className="eyebrow">Request A Survey</p>
        <h1 className="page-title">Bring us the site, scope, and timeline.</h1>
        <p className="page-intro">
          Share project constraints, location, target outputs, and any file transfer notes.
          The development build stores requests locally unless Firebase is connected.
        </p>
      </header>

      <main className="page shell">
        <div className="form-layout">
          <section className="form-card">
            <p className="card-kicker">Quote Request</p>
            <h3>Project Intake</h3>
            <p>
              We use this to scope flight planning, field time, control strategy, processing,
              and deliverables.
            </p>
            <QuoteRequestForm />
          </section>
          <aside className="panel">
            <p className="card-kicker">Typical Outputs</p>
            <h3>What teams usually ask for</h3>
            <ul className="stack-list">
              <li>Orthomosaic and web-viewable map exports</li>
              <li>DEM, DSM, contours, and point clouds</li>
              <li>Progress dashboards and volumetric reports</li>
              <li>Inspection image packages and issue logs</li>
            </ul>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
