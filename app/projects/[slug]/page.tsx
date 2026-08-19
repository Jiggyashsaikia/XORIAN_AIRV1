import { notFound } from 'next/navigation';
import { Footer } from '@/components/site-chrome';
import { projects } from '@/lib/site-data';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  return {
    title: project ? project.name : 'Output',
    description: project?.overview,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <header className="page-header shell">
        <p className="eyebrow">{project.clientIndustry}</p>
        <h1 className="page-title">{project.name}</h1>
        <p className="page-intro">{project.overview}</p>
      </header>
      <main className="page shell">
        <section className="project-summary">
          <div className="project-hero">
            <div className="project-hero-inner">
              <p className="card-kicker">Output Context</p>
              <h3>{project.location}</h3>
              <p>Use Case: {project.surveyArea}</p>
            </div>
          </div>
          <article className="panel">
            <h3>Output Overview</h3>
            <ul className="stack-list">
              <li>Industry: {project.clientIndustry}</li>
              <li>Drone Used: {project.droneUsed}</li>
              <li>Sensor Used: {project.sensorUsed}</li>
              <li>Workflow: {project.accuracy}</li>
            </ul>
          </article>
        </section>

        <section className="section">
          <div className="project-metrics">
            {project.deliverables.map((item) => (
              <article className="metric-card" key={item}>
                <p className="card-kicker">Deliverable</p>
                <h3>{item}</h3>
                <p>Structured for architects, engineers, and construction-focused review workflows.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Example Outputs</p>
              <h2 className="section-title">Typical files and views from the workflow.</h2>
            </div>
          </div>
          <div className="dashboard-grid">
            {project.gallery.map((item) => (
              <article className="project-gallery-card" key={item}>
                <p className="card-kicker">Dataset</p>
                <h3>{item}</h3>
                <p>Representative deliverable format prepared from aerial capture and data processing.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Before / After</p>
              <h2 className="section-title">From capture to final deliverable.</h2>
            </div>
          </div>
          <div className="comparison">
            <article className="compare-card">
              <p className="card-kicker">Before</p>
              <h3>{project.beforeLabel}</h3>
            </article>
            <article className="compare-card after">
              <p className="card-kicker">After</p>
              <h3>{project.afterLabel}</h3>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
