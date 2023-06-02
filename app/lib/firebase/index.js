// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUTUhsWXl7vYyI_Sb8i1wjJEAVdcfikQk",
  authDomain: "finance-tracker-f552f.firebaseapp.com",
  projectId: "finance-tracker-f552f",
  storageBucket: "finance-tracker-f552f.appspot.com",
  messagingSenderId: "79496582485",
  appId: "1:79496582485:web:dc6a27955e4bb052788bdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db}