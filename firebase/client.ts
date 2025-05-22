// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDAFL3LUHPXZQIrQ16EQD7nUw0DxT4j9v0",
  authDomain: "intai-656a8.firebaseapp.com",
  projectId: "intai-656a8",
  storageBucket: "intai-656a8.appspot.com", // fixed typo: 'firebasestorage.app' ➜ 'appspot.com'
  messagingSenderId: "748948582498",
  appId: "1:748948582498:web:849bf5a6116414e7a7213b",
  measurementId: "G-LQJK5QRQ7P"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);