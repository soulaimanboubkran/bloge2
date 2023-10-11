// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog1-9395d.firebaseapp.com",
  projectId: "blog1-9395d",
  storageBucket: "blog1-9395d.appspot.com",
  messagingSenderId: "1056041753659",
  appId: "1:1056041753659:web:3d65079fe0c0e95555901e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);