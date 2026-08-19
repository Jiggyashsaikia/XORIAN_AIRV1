import { Footer } from '@/components/site-chrome';
import { equipment } from '@/lib/site-data';

export const metadata = {
  title: 'Equipment',
  description: 'Drone, LiDAR, GNSS, and processing systems used by Xorian.',
};

export default function EquipmentPage() {
  return (
    <>
      <header className="page-header shell">
        <p className="eyebrow">Equipment</p>
        <h1 className="page-title">Enterprise-grade capture and processing stack.</h1>
        <p className="page-intro">
          The hardware and software stack is selected per mission based on coverage, terrain,
          access, accuracy, and output requirements.
        </p>
      </header>
      <main className="page shell">
        <div className="equipment-grid">
          {equipment.map((item) => (
            <article className="equipment-card" key={item.name}>
              {item.illustration ? (
                <div className="equipment-media">
                  <img
                    alt={item.illustration.alt}
                    className="equipment-photo"
                    loading="lazy"
                    src={item.illustration.src}
                  />
                  <span className="photo-note">Illustrative photography</span>
                </div>
              ) : null}
              <p className="card-kicker">{item.category}</p>
              <h3>{item.name}</h3>
              <p>Accuracy: {item.accuracy}</p>
              <ul className="stack-list">
                {item.specifications.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
                <li>Applications: {item.applications.join(', ')}</li>
                <li>Range: {item.range}</li>
                <li>Payload: {item.payload}</li>
                <li>Sample Dataset: {item.sampleDataset}</li>
              </ul>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
