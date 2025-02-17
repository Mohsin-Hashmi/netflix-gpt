// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClLLe-bT8RoHTj2r526WUWOEIHdEAS4d0",
  authDomain: "netflixgpt-79f5b.firebaseapp.com",
  projectId: "netflixgpt-79f5b",
  storageBucket: "netflixgpt-79f5b.firebasestorage.app",
  messagingSenderId: "911456405901",
  appId: "1:911456405901:web:34138967335dfd4c7e55c4",
  measurementId: "G-JJM4GT00GX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();