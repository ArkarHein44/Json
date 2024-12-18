// UI 
const chatrooms = document.querySelector('.chatrooms');
const getchatul = document.querySelector('.chat-ul');
const getchatform = document.querySelector('.chat-form');
const userform = document.querySelector('.user-form');
const msg = document.querySelector('.msg');

const getlocalname = localStorage.username ? localStorage.username : "Guest";
userform.username.placeholder = getlocalname ? `user name is ${getlocalname}` : "";



// 18ER 