// console.log("Hello Sir");

// In terminal 
// cd l3nmpjs 
// node index.js 
// or 
// nodemon index.js  (auto restart after ctrl + S)
// or 
// rs 

// npm install firebase 



  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Et6-DdxEK6objMVLtDR9r8jvB2jt5M4",
  authDomain: "my-first-project-7a867.firebaseapp.com",
  projectId: "my-first-project-7a867",
  storageBucket: "my-first-project-7a867.firebasestorage.app",
  messagingSenderId: "902717876425",
  appId: "1:902717876425:web:32ec152bfd1a5526cb4518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  console.log(app);
  console.log("i am working sir");

const db = getFirestore(app);
console.log(db);