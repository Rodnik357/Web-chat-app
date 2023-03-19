// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Prpp58l0-GbMl5JmBKMj-ntjSqsHk98",
  authDomain: "trachat-5777c.firebaseapp.com",
  projectId: "trachat-5777c",
  storageBucket: "trachat-5777c.appspot.com",
  messagingSenderId: "974904476470",
  appId: "1:974904476470:web:2b64e98d65b420256f2997",
  measurementId: "G-3GG11GKDKP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
