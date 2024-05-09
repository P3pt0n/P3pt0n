import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth  } from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  
  apiKey: "AIzaSyDKmY7QjUEFE3BW4FIm1ZjBkVjE3v-T2F8",

  authDomain: "curso-react-app-gastos-8943b.firebaseapp.com",

  projectId: "curso-react-app-gastos-8943b",

  storageBucket: "curso-react-app-gastos-8943b.appspot.com",

  messagingSenderId: "785704036627",

  appId: "1:785704036627:web:b19d659c7398296c3b12e6"


};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();

export {db, auth};

