// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHa6bKpzVIacyOhqHupzjFMprwhfgkezw",
  authDomain: "register-ac1a2.firebaseapp.com",
  projectId: "register-ac1a2",
  storageBucket: "register-ac1a2.appspot.com",
  messagingSenderId: "312757856416",
  appId: "1:312757856416:web:d8e9219be90273334e01c5",
  measurementId: "G-9Q3W9B9M55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
