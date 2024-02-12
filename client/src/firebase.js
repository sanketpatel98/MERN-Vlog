// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-db102.firebaseapp.com",
  projectId: "mern-blog-db102",
  storageBucket: "mern-blog-db102.appspot.com",
  messagingSenderId: "869079112356",
  appId: "1:869079112356:web:79e6ffe030f38b294d6431"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

