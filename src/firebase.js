import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "903329302770",
  appId: "1:903329302770:web:75ba1f8940fff3077de86b",
  measurementId: "G-1HFYB1PGGW",
});

const db = firebase.firestore();

export { db };
