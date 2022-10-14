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
    apiKey: 'AIzaSyBgKgRmTmkrxnp2okjL-ZHW1jLK8G2E56E',
    authDomain: 'bomba-demo.firebaseapp.com',
    projectId: 'bomba-demo',
    storageBucket: 'bomba-demo.appspot.com',
    messagingSenderId: '928356886949',
    appId: '1:928356886949:web:58a0c322fc5955aaada04c',
    measurementId: 'G-Y3Q8TEYCPF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);