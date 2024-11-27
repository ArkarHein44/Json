
import { initializeApp } from "firebase/app";

import { getFirestore, deleteDoc, doc} from 'firebase/firestore/lite';

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
const db = getFirestore(app);
// console.log(db);

// const dbRef = doc(db,"products","myid1001");

// delete whole id 
// deleteDoc(dbRef);

const dbRef = doc(db,"products","vYjAbLzv4JWOq0TsaRro");
deleteDoc(dbRef).then(()=>{
    console.log("Delete Successfully");
}).catch(error=>{
    console.log(error);
})


// 27DD 