import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBmpsUfHfoRKn8rGxpqO5Ei85zP82cpWSg",
  authDomain: "aplikasi-quiz-2d350.firebaseapp.com",
  projectId: "aplikasi-quiz-2d350",
  storageBucket: "aplikasi-quiz-2d350.appspot.com",
  messagingSenderId: "991281968135",
  appId: "1:991281968135:web:dffd3e02beef9aa31a26a2",
  measurementId: "G-MHM34E8Q8V",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
