
import { Authorize  } from "./authorize.js";

// UI
const signupform = document.getElementById('signupform'); 
// console.log(signupform);
// Register
signupform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();

    const email = document.getElementById('email').value.trim();

    const password = document.getElementById('password').value.trim();

    // console.log(fullname, email, password);

    const authorize = Authorize();
    authorize.registerUser(fullname, email, password);

});