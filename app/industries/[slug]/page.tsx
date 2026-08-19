import { notFound } from 'next/navigation';
import { Footer } from '@/components/site-chrome';
import { industries } from '@/lib/site-data';

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industries.find((entry) => entry.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <header className="page-header shell">
        <p className="eyebrow">Industry Focus</p>
        <h1 className="page-title">{industry.name}</h1>
        <p className="page-intro">{industry.summary}</p>
      </header>
      <main className="page shell">
        <section className="industry-story">
          <div className="card-grid two-up">
            <article className="panel">
              <h3>Typical challenges</h3>
              <ul className="stack-list">
                {industry.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="panel">
              <h3>Common outputs</h3>
              <ul className="stack-list">
                {industry.outputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
