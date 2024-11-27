
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
  
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
    // console.log("i am working sir");
  
  const db = getFirestore(app);
//   console.log(db);

// Create Database
// https://console.firebase.google.com/  > Build > Firestore Database > Create Database 

// addDoc(collection(db,"users"),{
//     name:"aung aung",
//     city:"Bago",
//     age:40
// });

// addDoc(collection(db,"users"),{
//     name:"kyaw kyaw",
//     city:"Bago",
//     age:35
// }).then(docRef=>{
//     console.log(docRef.id);
// }).catch(error=>{
//     console.log(error);
// });

addDoc(collection(db,"users"),{
  name:"Aye Maung",
  city:"mandalay",
  age:45
}).then(docRef=>{
  console.log(docRef.id);
}).catch(error=>{
  console.log(error);
});



// Error for writing (PERMISSION_DENIED)
// Rules > allow read, write: if true; > Publish

// gmail