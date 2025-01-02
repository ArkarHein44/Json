import { Authorize  } from "./authorize.js";

// UI
const signupform = document.getElementById('signupform'); 
const googleloginbtn = document.getElementById('googleloginbtn');
// console.log(signupform);

// Login
signupform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const signinemail = document.getElementById('signinemail').value.trim();
    const signinpassword = document.getElementById('signinpassword').value.trim();

    // console.log(signinemail, signinpassword);

    const {loginUser} = Authorize();
    loginUser(signinemail, signinpassword);

});


// Google Login
googleloginbtn.addEventListener('click',(e)=>{
   
    const {googleLogin} = Authorize();
    googleLogin();

});