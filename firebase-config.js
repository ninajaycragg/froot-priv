import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDING_ID,
  appId: process.env.NEXT_PUBLIC_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASURMENT_ID,
};
let app;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
}
export const auth = getAuth(app);
