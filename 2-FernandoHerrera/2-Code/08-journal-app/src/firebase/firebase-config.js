import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/firebase-auth';

const firebaseConfig = {
  apiKey: "AIzaSyCjev8zqzwFfHbV3kSs1mkq5GLGkyxDD6M",
  authDomain: "react-cursos-fernando.firebaseapp.com",
  projectId: "react-cursos-fernando",
  storageBucket: "react-cursos-fernando.appspot.com",
  messagingSenderId: "1001913420392",
  appId: "1:1001913420392:web:8a799e0d42356ca786c9dd"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}