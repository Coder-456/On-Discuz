import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCxdhx4iI3y4bEqsfhmbDCQLuAUpDQJ2Hg",
    authDomain: "ondiscuz.firebaseapp.com",
    projectId: "ondiscuz",
    storageBucket: "ondiscuz.appspot.com",
    messagingSenderId: "440759915652",
    appId: "1:440759915652:web:6f771181f04e6198171ed1"
  })

//From the firebase app, we get firestore.

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { db, auth }