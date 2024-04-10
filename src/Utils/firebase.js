// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM6sCkG20L3ZFs4SXSn-awJdQOWwACs0A",
  authDomain: "netflixgpt-4a970.firebaseapp.com",
  projectId: "netflixgpt-4a970",
  storageBucket: "netflixgpt-4a970.appspot.com",
  messagingSenderId: "402257437279",
  appId: "1:402257437279:web:c231f9012950f6f010b1ea",
  measurementId: "G-RNNLT3ZE8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();