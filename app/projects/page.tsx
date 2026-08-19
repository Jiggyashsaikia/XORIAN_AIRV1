import Link from 'next/link';
import { Footer } from '@/components/site-chrome';
import { projects } from '@/lib/site-data';

export const metadata = {
  title: 'Outputs',
  description: 'Example drone surveying outputs and deliverable packages.',
};

export default function ProjectsPage() {
  return (
    <>
      <header className="page-header shell">
        <p className="eyebrow">Example Outputs</p>
        <h1 className="page-title">Mapping deliverables shaped for real project needs.</h1>
        <p className="page-intro">
          These sections show the kinds of outputs Xorian can produce, from aerial site maps
          and orthomosaics to 3D visualizations and professional handoff files.
        </p>
      </header>
      <main className="page shell">
        <div className="card-grid">
          {projects.map((project) => (
            <article className="project-gallery-card" key={project.slug}>
              <div className="project-hero">
                <img
                  alt={project.illustration.alt}
                  className="project-photo"
                  loading="lazy"
                  src={project.illustration.src}
                />
                <div className="project-hero-inner">
                  <span className="photo-note">Illustrative photography</span>
                  <p className="card-kicker">{project.clientIndustry}</p>
                  <h3>{project.name}</h3>
                  <p>{project.location}</p>
                </div>
              </div>
              <div style={{ paddingTop: 18 }}>
                <p>{project.overview}</p>
                <div className="mini-list">
                  <li>Use Case: {project.surveyArea}</li>
                  <li>Sensor: {project.sensorUsed}</li>
                  <li>Workflow: {project.accuracy}</li>
                </div>
                <div style={{ marginTop: 18 }}>
                  <Link className="button" href={`/projects/${project.slug}`}>
                    Open output details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
