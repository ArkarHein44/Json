import { getFirestore, collection, addDoc, getDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';

const db = getFirestore();
const dbRef = collection(db, "mytasks");


// //UI
// const getform = document.getElementById('form');
// const gettextbox = document.getElementById('textbox');
// const getul = document.querySelector('.list-group');

// const tasks = [];

// getform.addEventListener('submit',(e)=>{
//     //console.log('hay');
//     addnew();
//     e.preventDefault();
// });


// const getdatas = async()=>{
	
// 	try{
// 		// Method 1 need reload 
// 		// const docSnap = await getDoc(dbRef);
// 		// // console.log(docSnap);

// 		// docSnap.forEach(doc=>{
// 		// 	// console.log(doc.data());
// 		// 	// console.log(doc.id);

// 		// 	let gettasks = doc.data();
// 		// 		gettasks.id = doc.id;
// 		// 		console.log(gettasks);
			
// 		// 	tasks.push(gettasks);

// 		// });

// 		// console.log(tasks);

// 		//=> Method 2 (live)
// 		await onSnapshot(dbRef,docSnap=>{
			
// 			tasks = [];  // reset empty for clear previous pushed data

// 			docSnap.forEach(doc=>{
// 				// console.log(doc.data());
// 				// console.log(doc.id);
	
// 				let gettasks = doc.data();
// 					gettasks.id = doc.id;
// 					// console.log(gettasks);
				
// 				tasks.push(gettasks);
	
// 			});
// 			// console.log(gettasks);
// 			showtaskstodom(tasks);
// 		});

// 	}catch(error){
// 		console.log("Get Data Error : ", err);
// 	}
// };

// getdatas();

// const showtaskstodom = (taskarrs)=>{
// 	getul.innerHTML = '';

// 	taskarrs.forEach(task=>{
// 		const li = document.createElement('li');
// 		li.appendChild(document.createTextNode(task.todo));
// 		li.id = task.id;
// 		li.classList.add("list-group-item");

// 		li.innerHTML += `
// 				<div class="action">
// 					<button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
// 					<button type="button" class="delete-btn"><i class="fas fa-trash-alt"></i></button>
// 				</div>
// 		`;

// 		console.log(li);

// 		getul.appendChild(li);
// 	})
// }


// async function addnew() {
// 	const todotext = gettextbox.value;
// 	// console.log(todotext);

// 	if(gettextbox.getAttribute('task-id')){
// 		// Update data

// 		try{
// 			await updateDoc(dbRef,{
// 				todo:todotext,
// 				done:false
// 			});

// 			gettextbox.value="";
// 			gettextbox.focus();
// 			gettextbox.removeAttribute('task-id');
			 
// 		}catch(error){
// 			console.log("Update Data Error : " , error)		;
// 		}

// 	}else{
// 		// Create Data

// 		try{
// 			await addDoc(dbRef,{
// 				todo:todotext,
// 				done: false
// 			});

// 			gettextbox.value="";
// 			gettextbox.focus();
// 		}catch(error){
// 			console.log("Create Data Error : " , error)
// 		}

// 	}
// }

// getul.addEventListener('click', getclickedli);

// function getclickedli(e){
// 	// console.log(e.target);
// 	// console.log(e.target.closest("li"));
// 	// console.log(e.target.closest("li").getAttribute('id'));

// 	// console.log(e.target.className);
// 	// console.log(e.target.closest("button").className);

// 	const getid = e.target.closest("li").getAttribute('id');

// 	if(e.target.closest("button").className === "edit-btn"){
// 		edittask(getid);
// 	}else if(e.target.closest("button").className === "delete-btn"){
// 		deletetask(getid);
// 	}else{
// 		donetask(getid);
// 	}

// 	// if(e.target.)
// }

// function edittasks(id){
// 	console.log("edit tasks id = ",id);
// }

// function deletetask(id){
// 	console.log("delete tasks id = ",id);
// }

// async function donetask(id){
// 	console.log("done tasks id = ",id);
// }

// import { } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-SERVICE.js'

// Docs > Overview > Firebase fundamentals > Web icon > Available