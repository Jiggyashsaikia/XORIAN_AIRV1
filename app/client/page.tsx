import { Footer } from '@/components/site-chrome';

export const metadata = {
  title: 'Client Dashboard',
  description: 'Preview of the secure client workspace for projects, files, invoices, and reports.',
};

export default function ClientPage() {
  return (
    <>
      <header className="page-header shell">
        <p className="eyebrow">Client Dashboard</p>
        <h1 className="page-title">One place for project visibility and deliverables.</h1>
        <p className="page-intro">
          This is a front-end preview of the secure client workspace requested in the brief.
          Authentication and file permissions should be enforced once Firebase Auth and Storage
          are connected.
        </p>
      </header>
      <main className="page shell">
        <div className="dashboard-grid">
          <article className="dashboard-card">
            <p className="card-kicker">Projects</p>
            <h3>Track progress</h3>
            <p>View active phases, milestones, and survey status for each engagement.</p>
          </article>
          <article className="dashboard-card">
            <p className="card-kicker">Deliverables</p>
            <h3>Download datasets</h3>
            <p>Access orthomosaics, point clouds, reports, and project packages.</p>
          </article>
          <article className="dashboard-card">
            <p className="card-kicker">Finance</p>
            <h3>Invoices & reporting</h3>
            <p>See invoices, report snapshots, and delivery history.</p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
