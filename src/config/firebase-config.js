// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDE-XEMq1p_4OvGv-cpVNrSJwmKdZcNHbc",
  authDomain: "authentification-599c8.firebaseapp.com",
  projectId: "authentification-599c8",
  storageBucket: "authentification-599c8.appspot.com",
  messagingSenderId: "523590286799",
  appId: "1:523590286799:web:adfd50cc3c81d8b10066ba",
  measurementId: "G-4B8ZHVSTDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)
export const auth = getAuth(app)

