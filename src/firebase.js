import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBaNd45MxjQMKxtf5wL10G9niQaJEw9AcA",
    authDomain: "project-c9a49.firebaseapp.com",
    projectId: "project-c9a49",
    storageBucket: "project-c9a49.appspot.com",
    messagingSenderId: "925383331963",
    appId: "1:925383331963:web:d8dfb056ab687ca28052de",
    measurementId: "G-1DJ9MJ96PX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };