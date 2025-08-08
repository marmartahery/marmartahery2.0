// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB03fmDSXZ_7ENSm0I_xWirABKAKhXCqF8",
  authDomain: "marmartahery-f34de.firebaseapp.com",
  projectId: "marmartahery-f34de",
  storageBucket: "marmartahery-f34de.firebasestorage.app",
  messagingSenderId: "493504835048",
  appId: "1:493504835048:web:09c651d6efa132dfd4885d",
  measurementId: "G-1P9ZCXDDR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);