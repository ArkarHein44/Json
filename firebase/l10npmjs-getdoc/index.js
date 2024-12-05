
import { initializeApp } from "firebase/app";

import { getFirestore, getDoc, doc, onSnapshot} from 'firebase/firestore/lite';

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

// getDoc (for Single data by id)
// getDocs (for multi data need reload)

const dbRef = doc(db,"products","myid1002");
const getdata = await getDoc(dbRef);

// console.log(getdata.data()); // { stock: 200, unit: 'bot', price: 500, name: 'speed', type: 'food' }

console.log(getdata.data().name);  // speed
console.log(getdata.data().price); // 500
console.log(getdata.data().type);  //food

// => onSnapshot (live result)

const getresults = async ()=>{
  await onSnapshot(dbRef, docSnap=>{
    // console.log(docSnap);

    console.log(docSnap.data());
    console.log(docSnap.data().name);
    console.log(docSnap.data().price);
    console.log(docSnap.data().type);


  });

};

getresults();