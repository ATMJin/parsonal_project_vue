// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA1O-tggndKcTz3qQFpD-DpypWw1EiRQU",
  authDomain: "dyeingforspring.firebaseapp.com",
  projectId: "dyeingforspring",
  storageBucket: "dyeingforspring.appspot.com",
  messagingSenderId: "706498455238",
  appId: "1:706498455238:web:4a5fe978cc3867ffc0d9c7",
  measurementId: "G-XLLZ7HK4X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);