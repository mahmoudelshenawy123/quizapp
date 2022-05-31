// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKosp5tK1qvXb4XXlWWmZcynwXJrbF6aM",
  authDomain: "todoapp-a0c18.firebaseapp.com",
  databaseURL: "https://todoapp-a0c18-default-rtdb.firebaseio.com",
  projectId: "todoapp-a0c18",
  storageBucket: "todoapp-a0c18.appspot.com",
  messagingSenderId: "886195757611",
  appId: "1:886195757611:web:025bae0b9cc8cf92bb006e",
  measurementId: "G-F2KN5SNGED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth= getAuth(app)