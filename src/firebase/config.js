// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyeCJUGZFxtt0a8X2ObiWftc2Bm722waU",
  authDomain: "cursos-react-4ec56.firebaseapp.com",
  projectId: "cursos-react-4ec56",
  storageBucket: "cursos-react-4ec56.firebasestorage.app",
  messagingSenderId: "938134825001",
  appId: "1:938134825001:web:55040505d6e930c1881438"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);