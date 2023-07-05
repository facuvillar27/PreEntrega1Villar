// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhUW2A1H3m6RryqKDna0LStNp3KFaaH8k",
  authDomain: "ferreteria-1e07f.firebaseapp.com",
  projectId: "ferreteria-1e07f",
  storageBucket: "ferreteria-1e07f.appspot.com",
  messagingSenderId: "115836064666",
  appId: "1:115836064666:web:0778f8e0095c67acb0e023",
  measurementId: "G-ZYK4PW5RTX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)