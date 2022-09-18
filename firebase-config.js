import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAa1Lbj6-H0s8fzBW7Wwqc4yNkMGMhOXrY",
  authDomain: "frootauth.firebaseapp.com",
  projectId: "frootauth",
  storageBucket: "frootauth.appspot.com",
  messagingSenderId: "792376541192",
  appId: "1:792376541192:web:37b193dbe4ed74bfbc11bd",
  measurementId: "G-EKDRP2CWWR",
};
let app;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
}
export const auth = getAuth(app);
