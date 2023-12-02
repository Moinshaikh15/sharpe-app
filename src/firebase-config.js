import { getFirestore } from 'firebase/firestore'

import { initializeApp } from "firebase/app";

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
