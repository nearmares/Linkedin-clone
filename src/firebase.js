import firebase from "firebase";
//import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjWU8Mzj1E-NUZEvXvx5DunHjgErKvqwY",
  authDomain: "linked-in-cloned.firebaseapp.com",
  projectId: "linked-in-cloned",
  storageBucket: "linked-in-cloned.appspot.com",
  messagingSenderId: "157611402312",
  appId: "1:157611402312:web:dca9f109a29d858a37247d",
  measurementId: "G-HHJYMN4EW6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };