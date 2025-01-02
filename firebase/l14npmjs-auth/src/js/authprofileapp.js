import { Authorize  } from "./authorize.js";

// UI
const userinfodiv = document.getElementById('userinfo'); 
const logoutbtn = document.getElementById('logoutbtn');
// console.log(userinfodiv);

// Logout
logoutbtn.addEventListener('click',(e)=>{
   
    const {logoutUser} = Authorize();
    logoutUser();

});

// 2AU 