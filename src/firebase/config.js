// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = getEnvironments();
console.log( env);


//console.log(process.env);
//console.log(import.meta.env);

// Your web app's Firebase configuration

//Dev/prod
const firebaseConfig = {
  apiKey: "AIzaSyAyeCJUGZFxtt0a8X2ObiWftc2Bm722waU",
  authDomain: "cursos-react-4ec56.firebaseapp.com",
  projectId: "cursos-react-4ec56",
  storageBucket: "cursos-react-4ec56.firebasestorage.app",
  messagingSenderId: "938134825001",
  appId: "1:938134825001:web:55040505d6e930c1881438"
};

// // Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyAagzUSFHCDYRA0_fpicDAQ24YJbrAnaCA",
//   authDomain: "react-cursos-40001.firebaseapp.com",
//   projectId: "react-cursos-40001",
//   storageBucket: "react-cursos-40001.firebasestorage.app",
//   messagingSenderId: "590242697599",
//   appId: "1:590242697599:web:dfc485c9abe29b5b834a4a"
// };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);