import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

const config = { apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID };
export const firebaseEnabled = Boolean(config.apiKey && config.projectId && config.appId);
let app: FirebaseApp | undefined;
export function getFirebaseApp(): FirebaseApp | undefined { if (!firebaseEnabled) return undefined; app ??= getApps().length ? getApp() : initializeApp(config); return app; }
export function getDatabase(): Firestore | undefined { const instance = getFirebaseApp(); return instance ? getFirestore(instance) : undefined; }
