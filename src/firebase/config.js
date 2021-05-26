import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDejo4JxuazM4891CigER9Q2NVjayDhN7o",
    authDomain: "muso-ninjas-4c5ad.firebaseapp.com",
    projectId: "muso-ninjas-4c5ad",
    storageBucket: "muso-ninjas-4c5ad.appspot.com",
    messagingSenderId: "20872080062",
    appId: "1:20872080062:web:94e687b50d866953454cef"
  };

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp }