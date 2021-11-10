// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2guvHY1QaFDnJlP2SZgPCSlZJEYitVg4",
  authDomain: "disney-plus-clone2021.firebaseapp.com",
  projectId: "disney-plus-clone2021",
  storageBucket: "disney-plus-clone2021.appspot.com",
  messagingSenderId: "463449427287",
  appId: "1:463449427287:web:b335cfa6535845e50b8212",
  measurementId: "G-YKHH6BVHML",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { provider, storage, db };
