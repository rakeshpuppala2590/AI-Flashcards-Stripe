// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApjboobf8UDoL72yJCUPvTcab1LdV5g7M",
  authDomain: "flash-c9871.firebaseapp.com",
  projectId: "flash-c9871",
  storageBucket: "flash-c9871.appspot.com",
  messagingSenderId: "244092849722",
  appId: "1:244092849722:web:ac959fe4fc9aa1d4566f03",
  measurementId: "G-X2SRWR9VK8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);

export { db };
