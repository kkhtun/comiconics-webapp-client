// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8Y-Viz0wAb_FMl01trWDR1tdQkMvuYvQ",
    authDomain: "comiconics-dev.firebaseapp.com",
    projectId: "comiconics-dev",
    storageBucket: "comiconics-dev.appspot.com",
    messagingSenderId: "914896208362",
    appId: "1:914896208362:web:c849118ac14ae90f71f293",
    measurementId: "G-0M73MTJN99",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;
