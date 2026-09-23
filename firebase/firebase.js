import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyAMURVC2nJvkhmsZeVjwdc18klC-NLWkL8",
  authDomain: "dev-nomad-igor.firebaseapp.com",
  projectId: "dev-nomad-igor",
  storageBucket: "dev-nomad-igor.firebasestorage.app",
  messagingSenderId: "395807099586",
  appId: "1:395807099586:web:8c98b54afa00dc184c095b",
  measurementId: "G-CLQ3JWZXPZ"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);