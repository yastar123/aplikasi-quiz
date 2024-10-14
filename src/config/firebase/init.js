import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: dotenv.FIREBASE_API_KEY,
  authDomain: dotenv.FIREBASE_AUTH_DOMAIN,
  projectId: dotenv.FIREBASE_PROJECT_ID,
  storageBucket: dotenv.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: dotenv.FIREBASE_MESSAGING_SENDER_ID,
  appId: dotenv.FIREBASE_APP_ID,
  measurementId: dotenv.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const firestoreApp = getFirestore(app);

export default firestoreApp;