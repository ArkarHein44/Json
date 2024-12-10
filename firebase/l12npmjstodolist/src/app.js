import { getFirestore, collection, addDoc, getDoc, updateDoc, deleteDoc, doc, onSnapshot, Timestamp } from 'firebase/firestore';

const db = getFirestore();
const dbRef = collection(db, "mytasks");

//UI
const getform = document.getElementById('form');
const gettextbox = document.getElementById('textbox');
const getul = document.querySelector('.list-group');

let tasks = [];

getform.addEventListener('submit',(e)=>{
    //console.log('hay');
    addnew();
    e.preventDefault();
});

getul.addEventListener('click', getclickedli);

const getdatas = async()=>{
	
	try{
		// Method 1 need reload 
		// const docSnap = await getDoc(dbRef);
		// // console.log(docSnap);

		// docSnap.forEach(doc=>{
		// 	// console.log(doc.data());
		// 	// console.log(doc.id);

		// 	let gettasks = doc.data();
		// 		gettasks.id = doc.id;
		// 		console.log(gettasks);
			
		// 	tasks.push(gettasks);

		// });

		// console.log(tasks);

		//=> Method 2 (live)
		await onSnapshot(dbRef,docSnap=>{
			
			tasks = [];  // reset empty for clear previous pushed data

			docSnap.forEach(doc=>{
				// console.log(doc.data());
				// console.log(doc.id);
	
				let gettasks = doc.data();
					gettasks.id = doc.id;
					// console.log(gettasks);
				
				tasks.push(gettasks);
	
			});
			// console.log(gettasks);
			showtaskstodom(tasks);
		});

	}catch(error){
		console.log("Get Data Error : ", err);
	}
};

getdatas();

const showtaskstodom = (taskarrs)=>{
	getul.innerHTML = '';
	// console.log(taskarrs);

	taskarrs.forEach(task=>{
		// console.log(task);
		const whenago = dateFns.formatDistance(task.created_at.toDate(),new Date(),{addSuffix:true}); // {addSuffix:true} = ago
		
		const li = document.createElement('li');

		if(task.done){
			li.classList.add("completed");
		}

		li.appendChild(document.createTextNode(task.todo));
		li.id = task.id;
		li.classList.add("list-group-item");

		li.innerHTML += `
				<span class="time">${whenago}</span>
				<div class="action">
					<button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
					<button type="button" class="delete-btn"><i class="fas fa-trash-alt"></i></button>
				</div>
		`;

		// console.log(li);

		getul.appendChild(li);
	})
}

async function addnew() {
	const todotext = gettextbox.value;
	// console.log(todotext);
	const now = new Date();
	if(gettextbox.getAttribute('task-id')){
		// Update data

		

		const dbRef = doc(db, "mytasks", gettextbox.getAttribute('task-id'));

		try{
			await updateDoc(dbRef,{
				todo:todotext,
				done:false
			});

			gettextbox.value="";
			gettextbox.focus();
			gettextbox.removeAttribute('task-id');
			 
		}catch(error){
			console.log("Update Data Error : " , error)		;
		}

	}else{
		// Create Data


		try{
			await addDoc(dbRef,{
				todo:todotext,
				created_at:Timestamp.fromDate(now),
				done: false
			});

			gettextbox.value="";
			gettextbox.focus();
		}catch(error){
			console.log("Create Data Error : " , error)
		}

	}
}

function getclickedli(e){
	// console.log(e.target);
	// console.log(e.target.closest("li"));
	// console.log(e.target.closest("li").getAttribute('id'));

	// console.log(e.target.className);
	// console.log(e.target.closest("button").className);

	const getid = e.target.closest("li").getAttribute('id');

	const button = e.target.closest("button");

	if(button){
		if(button.className === "edit-btn"){
			edittasks(getid);
		}else{
			deletetask(getid);
		}
	}else{
		donetask(getid);
	}

	// if(e.target.closest("button").className === "edit-btn"){
	// 	edittasks(getid);
	// }else if(e.target.closest("button").className === "delete-btn"){
	// 	deletetask(getid);
	// }else{
	// 	donetask(getid);
	// }
	
}
// console.log(tasks);

function gettaskbyid(id){
	// console.log($id);

	return tasks.find(task=>{
		return task.id === id;
	});
	

}

function edittasks(id){
	// console.log("edit tasks id = ",id);

	const task = gettaskbyid(id);
	// console.log(task);
	// console.log(task.todo);

	gettextbox.value = task.todo;
	gettextbox.focus();
	gettextbox.setAttribute('task-id', task.id);

}

function deletetask(id){
	// console.log("delete tasks id = ",id);

	const isconfirmed = confirm("Are you sure to delete?");

	if(isconfirmed){

		const dbRef = doc(db,"mytasks",id);
		deleteDoc(dbRef);

	}else{
		return false;
	}
}

async function donetask(id){
	// console.log("done tasks id = ",id);

	const getli = document.getElementById(id);
	// console.log(getli);

	getli.classList.toggle("completed");
	const dbRef = doc(db,"mytasks",id);

	try{
		await updateDoc(dbRef,{
			done:getli.classList.contains("completed") ? true:false
		});

	}catch(err){
		console.log("Done Data Error : ", err);
		throw err;
	}
}

// import { } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-SERVICE.js'

// Docs > Overview > Firebase fundamentals > Web icon > Available