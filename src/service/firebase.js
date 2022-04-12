import { initializeApp } from 'firebase/app';
// import {GoogleAuthProvider} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
// export const googleProvider = new GoogleAuthProvider();