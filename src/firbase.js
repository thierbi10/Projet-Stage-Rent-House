// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getAuth,createUserWithEmailAndPassword } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAgUiylBsCjIQ1Npy0abAlgdg4K0EPartI",
  authDomain: "projet-renthouse-native.firebaseapp.com",
  projectId: "projet-renthouse-native",
  storageBucket: "projet-renthouse-native.appspot.com",
  messagingSenderId: "919389220864",
  appId: "1:919389220864:web:f5e3afdc48cb3770e268e5"
};

// Initialize Firebase
 export  const app = initializeApp(firebaseConfig);
 export const  auth = getAuth(app)