
import { initializeApp } from "firebase/app";

import { getFirestore,collection, setDoc, doc} from 'firebase/firestore/lite';

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

// setDoc(doc(db,"products","myid1001"),{
//     name:"redbull",
//     type:"food",
//     price:2000
// });


// setDoc(doc(db,"products","myid1002"),{
//     name:"sponsor",
//     type:"food",
//     price:1000
// }).then(()=>{
//     console.log("Create Successfully");
// }).catch(error=>{
//     console.log(error);
// });

// setDoc(doc(db,"products","myid1003"),{
//     name:"m150",
//     type:"food",
//     price:1000
// }).then((docRef)=>{
//     console.log("Create Successfully");
//     console.log(docRef.id); // error
// }).catch(error=>{
//     console.log(error);
// });

// setDoc(doc(db,"products","myid1003"),{
//     name:"m150",
//     type:"food",
//     price:1000
// }).then((docRef)=>{
//     console.log(docRef.id); / error
// }).catch(error=>{
//     console.log(error);
// });

setDoc(doc(collection(db,"products")),{
    name:"deedo",
    type:"food",
    price:500
}).then(()=>{
    console.log("Create Successfully");
}).catch(error=>{
    console.log(error);
});

// addDoc and setDoc for data insert
// setDoc don't generate id automatically 