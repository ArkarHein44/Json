// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore } from "firebase/firestore";
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

// console.log(app);

const db = getFirestore(app);
// console.log(db);

// create database 
// go to firebase website 
// Build > firebase firestore> create Database > id->default > location -> asia/singapore > next > choose production mode > create

// create  collection 
// start collection > collection id is like table name in sql> add field, type and value and got it

// function for sending data to firebase collection
// import {addDoc, collection, getFirestore } from "firebase/firestore"; need 
// addDoc(collection(database, "collection name"),{object} )

addDoc(collection(db,"users"),{
    name: "test",
    city: "test",
    age: 1
}).then(docRef=>{
    console.log(docRef);
    console.log(docRef.id);
}).catch(error=>{
    console.log(error);
});

// argument in then(docRef) is DocumentReference object