import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1Et6-DdxEK6objMVLtDR9r8jvB2jt5M4",
  authDomain: "my-first-project-7a867.firebaseapp.com",
  projectId: "my-first-project-7a867",
  storageBucket: "my-first-project-7a867.firebasestorage.app",
  messagingSenderId: "902717876425",
  appId: "1:902717876425:web:32ec152bfd1a5526cb4518"
};
firebase/l13npmchatroom/src/js/firebase.js
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);

export const db = getFirestore(app);