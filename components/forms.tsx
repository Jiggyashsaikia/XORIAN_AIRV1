'use client';

import { type FormEvent, useState } from 'react';
import { saveSubmission } from '@/services/submissions';

const fields = [
  ['company', 'Company', 'text'],
  ['name', 'Name', 'text'],
  ['email', 'Email', 'email'],
  ['phone', 'Phone', 'tel'],
  ['projectType', 'Project Type', 'text'],
  ['surveyArea', 'Survey Area', 'text'],
  ['location', 'Location', 'text'],
  ['timeline', 'Timeline', 'text'],
  ['budget', 'Budget', 'text'],
] as const;

export function QuoteRequestForm() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setDone(false);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    await saveSubmission('quotes', data);

    form.reset();
    setSending(false);
    setDone(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map(([name, label, type]) => (
        <label key={name}>
          {label}
          <input name={name} required type={type} />
        </label>
      ))}
      <label>
        Upload Site Plan
        <input name="sitePlan" placeholder="Filename or transfer note" type="text" />
      </label>
      <label>
        Upload CAD Files
        <input name="cadFiles" placeholder="Filename or transfer note" type="text" />
      </label>
      <label className="full">
        Message
        <textarea name="message" required />
      </label>
      <div className="full">
        <button className="button button-primary" disabled={sending} type="submit">
          {sending ? 'Sending Request...' : 'Submit Quote Request'}
        </button>
        {done ? (
          <p className="notice">
            Quote request stored successfully. When Firebase is configured, this can flow
            directly into Firestore.
          </p>
        ) : null}
      </div>
    </form>
  );
}
