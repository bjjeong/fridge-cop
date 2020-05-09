import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-database';

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'fridge-cop-5fd76.firebaseapp.com',
    databaseURL: 'https://fridge-cop-5fd76.firebaseio.com',
    projectId: 'fridge-cop-5fd76',
    storageBucket: 'fridge-cop-5fd76.appspot.com',
    messagingSenderId: '764266127680',
    appId: '1:764266127680:web:48ed5cd80d44dbf43a1aa5',
    measurementId: 'G-5S49SYE9HF',
};
