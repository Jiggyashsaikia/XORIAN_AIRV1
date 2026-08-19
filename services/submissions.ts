import { addDoc, collection } from 'firebase/firestore';
import { getDatabase } from '@/firebase/client';

export async function saveSubmission(
  kind: 'messages' | 'quotes' | 'newsletter',
  values: Record<string, string>,
): Promise<void> {
  const payload = { ...values, createdAt: new Date().toISOString() };
  const database = getDatabase();

  if (database) {
    await addDoc(collection(database, kind), payload);
    return;
  }

  const existing = JSON.parse(
    localStorage.getItem(`xorian-${kind}`) ?? '[]',
  ) as Record<string, string>[];
  localStorage.setItem(`xorian-${kind}`, JSON.stringify([...existing, payload]));
}
