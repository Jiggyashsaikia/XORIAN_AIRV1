import { Footer } from '@/components/site-chrome';
import { services } from '@/lib/site-data';

export const metadata = {
  title: 'Services',
  description: 'Drone photogrammetry, LiDAR, topographic mapping, inspections, and monitoring.',
};

export default function ServicesPage() {
  return (
    <>
      <header className="page-header shell">
        <p className="eyebrow">Services</p>
        <h1 className="page-title">Survey services built around real project constraints.</h1>
        <p className="page-intro">
          Each workflow is scoped around access, accuracy, terrain complexity, processing
          needs, and how the final data will be consumed.
        </p>
      </header>
      <main className="page shell">
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-detail" key={service.slug}>
              <p className="card-kicker">{service.estimatedTurnaround}</p>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <ul className="stack-list">
                {service.applications.map((item) => (
                  <li key={item}>Application: {item}</li>
                ))}
                {service.deliverables.map((item) => (
                  <li key={item}>Deliverable: {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
