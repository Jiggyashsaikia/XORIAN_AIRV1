'use client';

import { useEffect, useState } from 'react';

type RecordItem = Record<string, string>;
type TabKey = 'quotes' | 'messages' | 'newsletter';

const tabs: TabKey[] = ['quotes', 'messages', 'newsletter'];

export default function AdminPage() {
  const [tab, setTab] = useState<TabKey>('quotes');
  const [items, setItems] = useState<RecordItem[]>([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem(`xorian-${tab}`) ?? '[]') as RecordItem[]);
  }, [tab]);

  return (
    <main className="page shell" style={{ paddingTop: 140 }}>
      <p className="eyebrow">Admin Dashboard</p>
      <h1 className="page-title">Operational control center.</h1>
      <p className="page-intro">
        This development dashboard reads local fallback records. In production, protect this
        route and connect Firebase Authentication, Firestore, Storage, and reporting tools.
      </p>

      <section className="section" style={{ paddingTop: 28 }}>
        <div className="dashboard-grid">
          <article className="dashboard-card">
            <p className="card-kicker">Management</p>
            <h3>Projects</h3>
            <p>Track deliverables, reports, and active progress packages.</p>
          </article>
          <article className="dashboard-card">
            <p className="card-kicker">Client Ops</p>
            <h3>Clients & Uploads</h3>
            <p>Coordinate file intake, datasets, invoices, and access permissions.</p>
          </article>
          <article className="dashboard-card">
            <p className="card-kicker">Growth</p>
            <h3>Blog & Analytics</h3>
            <p>Monitor content performance and inbound demand trends.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Local Records</p>
            <h2 className="section-title">Stored submissions</h2>
          </div>
        </div>
        <div className="hero-actions" style={{ marginTop: 0, marginBottom: 18 }}>
          {tabs.map((key) => (
            <button
              className={key === tab ? 'button button-primary' : 'button'}
              key={key}
              onClick={() => setTab(key)}
              type="button"
            >
              {key}
            </button>
          ))}
        </div>
        <div className="card-grid">
          {items.length === 0 ? (
            <article className="panel">
              <h3>No stored {tab} yet.</h3>
              <p>Submit the related form in the local build to see records appear here.</p>
            </article>
          ) : (
            items.map((item, index) => (
              <article className="panel" key={`${item.createdAt}-${index}`}>
                <p className="card-kicker">{item.createdAt ?? 'Draft'}</p>
                <h3>{item.company ?? item.name ?? 'Submission'}</h3>
                <p>
                  {(item.email ?? 'No email provided') + ' • ' + (item.location ?? 'No location')}
                </p>
                <p>{item.message ?? 'No notes provided.'}</p>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
