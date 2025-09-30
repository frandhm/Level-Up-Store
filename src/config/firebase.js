import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCPMN6HSO6hHE2znb53EimcUGIHVMh-56o",
  authDomain: "tiendalevelupstore.firebaseapp.com",
  projectId: "tiendalevelupstore",
  storageBucket: "tiendalevelupstore.firebasestorage.app",
  messagingSenderId: "569200030943",
  appId: "1:569200030943:web:254ca57a2ab9b5b9d7656a",
  measurementId: "G-Q2MTK0JG8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);