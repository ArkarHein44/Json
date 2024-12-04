import {getFirestore, collection, addDoc, getDoc, updateDoc, deleteDoc, doc} from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';
import { initializeApp } from "firebase/app";

const db = getFirestore();
const dbRef = collection(db, "mytasks");

//UI
const getform = document.getElementById('form');
const gettextbox = document.getElementById('textbox');
const getul = document.querySelector('.list-group');

getform.addEventListener('submit',(e)=>{

    //console.log('hay');

    addnew();

    e.preventDefault();

});

async function addnew(params) {
	const todotext = gettextbox.value;
	// console.log(todotext);

	if(gettextbox.getAttribute('task-id')){
		// Update data

		try{
			await updateDoc(dbRef,{
				todo:todotext,
				done:false
			});

		}catch(error){
			gettextbox.value="";
			
		}

	}else{
		// Create Data

		try{

		}catch(error){

		}

	}
}