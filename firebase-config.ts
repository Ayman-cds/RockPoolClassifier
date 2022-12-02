// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBQelogTl1LvDSIrNPtbvvDbdawRfJJGtY',
    authDomain: 'oceanhack-75cd2.firebaseapp.com',
    projectId: 'oceanhack-75cd2',
    storageBucket: 'oceanhack-75cd2.appspot.com',
    messagingSenderId: '789818373285',
    appId: '1:789818373285:web:ba0ce7635d1608f4cdc94c',
    measurementId: 'G-275ZN0NGRB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);