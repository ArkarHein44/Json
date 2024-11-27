
import { initializeApp } from "firebase/app";

import { getFirestore, updateDoc, doc} from 'firebase/firestore/lite';

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

// updateDoc(doc(db,"products","myid1001"),{
//     name:"sponsor"
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });

// updateDoc(doc(db,"products","myid1001"),{
//     price:2000
// });

// updateDoc(doc(db,"products","myid1001"),{
//     price:3000,
//     unit:"can"
// });

// const dbRef = doc(db,"products","myid1001");
// const data = {
//     name: "deedo"
// };

// updateDoc(dbRef,data);

const dbRef = doc(db,"products","myid1001");
const data = {
    name: "babimind",
    type:"non-food",
    price:20000,
    uint:"bot"
};

updateDoc(dbRef,data).then(()=>{
    console.log("Update Successfully");
}).catch(error=>{
    console.log(error);
});