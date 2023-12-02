import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALFyBD4uJBD177Dxh9-536tHKs2RPmjSs",
    authDomain: "sharpe-app.firebaseapp.com",
    projectId: "sharpe-app",
    storageBucket: "sharpe-app.appspot.com",
    messagingSenderId: "690786516486",
    appId: "1:690786516486:web:ffd9bc122b5d2abb0c4d87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db }
