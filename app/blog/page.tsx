import { Footer } from '@/components/site-chrome';
import { blogPosts } from '@/lib/site-data';

export const metadata = {
  title: 'Blog',
  description: 'Educational geospatial articles and SEO-ready editorial topics for Xorian.',
};

export default function BlogPage() {
  return (
    <>
      <header className="page-header shell">
        <p className="eyebrow">Journal</p>
        <h1 className="page-title">Practical field notes for modern survey programs.</h1>
        <p className="page-intro">
          Educational content designed to help buyers and project teams understand methods,
          accuracy, scope choices, and delivery expectations.
        </p>
      </header>
      <main className="page shell">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="article-card" key={post.slug}>
              <p className="card-kicker">{post.category}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
