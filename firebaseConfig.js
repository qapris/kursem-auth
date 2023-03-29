// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5cfAVCHJo2atREaDaYxQK1a5pUeAuC18",
  authDomain: "app-proof-ad903.firebaseapp.com",
  databaseURL: "https://app-proof-ad903-default-rtdb.firebaseio.com",
  projectId: "app-proof-ad903",
  storageBucket: "app-proof-ad903.appspot.com",
  messagingSenderId: "1090211609264",
  appId: "1:1090211609264:web:ec390bc1c4d2dace2a9975",
  measurementId: "G-30R1DBV0WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);