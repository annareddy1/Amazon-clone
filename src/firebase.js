import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHmhQVw-kv_WppPrjg1EAgcQ2fomPznbA",
    authDomain: "builld-1662f.firebaseapp.com",
    projectId: "builld-1662f",
    storageBucket: "builld-1662f.appspot.com",
    messagingSenderId: "572256491175",
    appId: "1:572256491175:web:8d702bd9f3834a3a57ad82"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };