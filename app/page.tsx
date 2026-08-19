import Link from 'next/link';
import { Footer } from '@/components/site-chrome';
import { FadeIn } from '@/components/reveal';
import { blogPosts, industries, projects, services, siteStats } from '@/lib/site-data';

export default function Home() {
  return (
    <>
      <main>
        <section className="hero-panel">
          <div className="hero-mesh" />
          <div className="hero-grid" />
          <div className="hero-content shell">
            <FadeIn>
              <p className="eyebrow">Geospatial Intelligence for Complex Sites</p>
              <h1 className="hero-title">Precision From Above.</h1>
              <p className="hero-copy">
                Professional drone photogrammetry, LiDAR, and surveying workflows for
                engineers, developers, utilities, and public-sector teams.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/contact">
                  Request Survey
                </Link>
                <Link className="button" href="/projects">
                  View Outputs
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="stats-grid">
                {siteStats.map((stat) => (
                  <article className="stat-card" key={stat.label}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="section shell section-split">
          <FadeIn>
            <div>
              <p className="eyebrow">Why Xorian</p>
              <h2 className="section-title">Engineering-grade capture, modeled for decisions.</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="section-copy">
              Xorian delivers terrain models, orthomosaics, classified point clouds, and
              inspection datasets that teams can act on quickly. Our field operations are
              built around accuracy, repeatability, and fast turnarounds for active sites.
            </p>
          </FadeIn>
        </section>

        <section className="section shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="section-title">Survey programs tuned to the site, sensor, and risk profile.</h2>
            </div>
            <Link className="text-link" href="/services">
              Explore all services
            </Link>
          </div>
          <div className="card-grid three-up">
            {services.slice(0, 6).map((service, index) => (
              <FadeIn delay={index * 0.05} key={service.slug}>
                <article className="feature-card">
                  <p className="card-kicker">{service.estimatedTurnaround}</p>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <ul className="mini-list">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Example Outputs</p>
              <h2 className="section-title">See the kinds of deliverables the workflow is built to produce.</h2>
            </div>
          </div>
          <div className="project-map">
            <div className="map-surface">
              {projects.map((project) => (
                <Link
                  className="map-pin"
                  href={`/projects/${project.slug}`}
                  key={project.slug}
                  style={{ left: project.pin.left, top: project.pin.top }}
                >
                  <span />
                  {project.location}
                </Link>
              ))}
            </div>
            <div className="map-sidebar">
              {projects.slice(0, 3).map((project) => (
                <article className="map-project" key={project.slug}>
                  <p className="card-kicker">{project.clientIndustry}</p>
                  <h3>{project.name}</h3>
                  <p>{project.overview}</p>
                  <Link className="text-link" href={`/projects/${project.slug}`}>
                    Review output
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Core Disciplines</p>
              <h2 className="section-title">Understand the workflows behind the deliverables.</h2>
            </div>
          </div>
          <div className="card-grid two-up">
            <FadeIn>
              <article className="workflow-card workflow-lidar">
                <p className="card-kicker">LiDAR</p>
                <h3>High-density point clouds for canopy, corridor, and elevation analysis.</h3>
                <p>
                  Learn how laser pulses, classification, DTM/DSM generation, and QA checks
                  create reliable datasets in vegetated and complex environments.
                </p>
                <Link className="button" href="/lidar">
                  Explore LiDAR
                </Link>
              </article>
            </FadeIn>
            <FadeIn delay={0.08}>
              <article className="workflow-card workflow-photo">
                <p className="card-kicker">Photogrammetry</p>
                <h3>Overlapped imagery turned into orthomosaics, meshes, and terrain models.</h3>
                <p>
                  Review our capture planning, GCP strategy, reconstruction pipeline, and
                  model outputs for design and monitoring teams.
                </p>
                <Link className="button" href="/photogrammetry">
                  Explore Photogrammetry
                </Link>
              </article>
            </FadeIn>
          </div>
        </section>

        <section className="section shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Industries</p>
              <h2 className="section-title">Built for programs where precision and site visibility matter.</h2>
            </div>
            <Link className="text-link" href="/industries">
              See all industries
            </Link>
          </div>
          <div className="pill-grid">
            {industries.map((industry) => (
              <Link className="pill-card" href={`/industries/${industry.slug}`} key={industry.slug}>
                <span>{industry.name}</span>
                <small>{industry.summary}</small>
              </Link>
            ))}
          </div>
        </section>

        <section className="section shell section-split">
          <FadeIn>
            <div>
              <p className="eyebrow">Insights</p>
              <h2 className="section-title">Useful reading for survey buyers and technical teams.</h2>
            </div>
          </FadeIn>
          <div className="card-grid">
            {blogPosts.slice(0, 3).map((post, index) => (
              <FadeIn delay={index * 0.06} key={post.slug}>
                <article className="article-card">
                  <p className="card-kicker">{post.category}</p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link className="text-link" href="/blog">
                    Read the journal
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
