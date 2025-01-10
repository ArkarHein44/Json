import { Chatroom  } from "./chat.js"; 
import { LiElements  } from "./lielement.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

// UI 
const chatrooms = document.querySelector('.chatrooms');
const chatul = document.querySelector('.chat-ul');
const chatform = document.querySelector('.chat-form');
const userform = document.querySelector('.user-form');
const msg = document.querySelector('.msg');
const roomtitle = document.querySelector('.roomtitle');

const getlocalname = localStorage.username ? localStorage.username : "Guest";
userform.username.placeholder = getlocalname ? `user name is ${getlocalname}` : "";

// Chatroom instance
const chatroom = Chatroom("general", getlocalname);
roomtitle.textContent = "General";

// LiElements instance 
const domli = LiElements(chatul);

// Start Chat 
chatform.addEventListener('submit', (e)=>{
    e.preventDefault();

    const message = chatform.message.value.trim();
    chatroom.addChat(message)
        .then(()=>chatform.reset())
        .catch(err=>console.log(err));
});

// Update Username 
userform.addEventListener('submit', (e)=>{
    e.preventDefault();

    const newusername = userform.username.value.trim();
    chatroom.updateUsername(newusername);
    userform.reset();


    //show and hide msg
    msg.innerText = `New name updated to ${newusername}`;
    userform.username.placeholder = `username is ${newusername}`;

    setTimeout(()=>msg.innerText=``, 3000);
});

// Update chat room 
chatrooms.addEventListener('click', (e)=>{

    e.preventDefault();

    const getbtn = e.target.closest('button');
    //console.log(getbtn);

    if(getbtn){

        // restli , clear all previous lists
        domli.resetli();

        const getroomid = getbtn.getAttribute('id');
        //console.log(getroomid);

        const gettitle = getbtn.querySelector('h3').innerText;

        roomtitle.textContent = gettitle;

        // update chat room 
        chatroom.updateChatroom(getroomid);

        // fetch Get Chats 
        chatroom.getChats((data)=>{
            domli.newli(data);
        });

    }

});

// Get Chats 
chatroom.getChats((data)=>{
    domli.newli(data);
});