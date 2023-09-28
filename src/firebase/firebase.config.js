// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbzVqxrkJviWFpY5j8A5isDvfb4kebaOE",
  authDomain: "next-auth-learning-7fb7a.firebaseapp.com",
  projectId: "next-auth-learning-7fb7a",
  storageBucket: "next-auth-learning-7fb7a.appspot.com",
  messagingSenderId: "198667381019",
  appId: "1:198667381019:web:e26be0f1c2c867721ecbbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app