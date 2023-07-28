// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAOHBWoYzT1waORTwL96rlr9AKXynoq-7Q",

  authDomain: "paginaweb-54845.firebaseapp.com",

  projectId: "paginaweb-54845",

  storageBucket: "paginaweb-54845.appspot.com",

  messagingSenderId: "1011225317488",

  appId: "1:1011225317488:web:5a5f89c4bee6f6f8f564b5"

};


export const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
