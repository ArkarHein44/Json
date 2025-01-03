
import { initializeApp } from "firebase/app";

import { getFirestore, setDoc, doc} from 'firebase/firestore/lite';

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

// setDoc cant use insert and update 
// update redbull to deedo 
// setDoc(doc(db,"products","myid1001"),{
//     name:"cocacola",
//     type:"drink",
//     price:300
// }).then(()=>{
//     console.log("Updated Successfully");
// }).catch(error=>console.log(error));

// setDoc(doc(db,"products","vYjAbLzv4JWOq0TsaRro"),{
//     name:"cocacola",
//     type:"drink",
//     price:300
// }).then(()=>{
//     console.log("Updated Successfully");
// }).catch(error=>console.log(error));

// => Before Merge

// setDoc(doc(db,"products","myid1002"),{
//   name:"speed",
//   type:"food",
//   price:500,
//   unit:"bot"
// }).catch(error=>{
//   console.log(error);
// })

// setDoc(doc(db,"products","myid1002"),{
// }).then(()=>{
//   console.log("Update Successfully");
// }).catch(error=>{
//   console.log(error);
// })

// => After Merge
// setDoc(doc(db,"products","myid1002"),{
//   name:"speed",
//   type:"food",
//   price:500,
//   unit:"bot"
// }).catch(error=>{
//   console.log(error);
// })

// setDoc(doc(db,"products","myid1002"),{
// },{merge:true}).then(()=>{
//   console.log("Update Successfully");
// }).catch(error=>{
//   console.log(error);
// })

// setDoc(doc(db,"products","myid1002"),{
//   name:"deedo"
// },{merge:true}).then(()=>{
//   console.log("Update Successfully");
// }).catch(error=>{
//   console.log(error);
// })

// Before Merge 
// setDoc(doc(db,"products","myid1002"),{
//   stock:200
// }).then(()=>{
//   console.log("Update Successfully");
// }).catch(error=>{
//   console.log(error);
// })

// After Merge
setDoc(doc(db,"products","myid1002"),{
    name:"speed",
    type:"food",
    price:500,
    unit:"bot"
  },{merge:true}).then(()=>{
    console.log("Update Successfully");
  }).catch(error=>{
    console.log(error);
  })
  
// 21BM