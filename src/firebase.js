import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6iQOxPpM7Fy-PlFvl8mxMtVeNYmfUVvo",
  authDomain: "huluclone-fffbd.firebaseapp.com",
  databaseURL: "https://huluclone-fffbd.firebaseio.com",
  projectId: "huluclone-fffbd",
  storageBucket: "huluclone-fffbd.appspot.com",
  messagingSenderId: "147458296762",
  appId: "1:147458296762:web:801779a374ec82f983eb83",
  measurementId: "G-GKLK35TC1N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firestore is the database instance
const db = firebaseApp.firestore();

export default db;