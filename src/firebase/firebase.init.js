// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3jbiGTxzXa2ssLCMUWQiuDS6r2vMxMvU",
  authDomain: "smart-deals-657a0.firebaseapp.com",
  projectId: "smart-deals-657a0",
  storageBucket: "smart-deals-657a0.firebasestorage.app",
  messagingSenderId: "438800200541",
  appId: "1:438800200541:web:c3431d4a2c825f5ae0eeb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);