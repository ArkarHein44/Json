import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";


export function Authorize(){
    // Signup
    const registerUser = async(fullname, email, password)=>{
        
        try{
            const defaultprofileimg = `https://static.thenounproject.com/png/65476-200.png`;
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // console.log(user);
            await updateProfile(user,{
                displayName:fullname,
                photoURL: defaultprofileimg
            }).then(()=>{
                // Redirect to profile.html 
                window.location.href = "../profile.html";
            })
           

        }catch(err){
            console.log("Error registering users : ", err)
        }
    }
    
    // Signin
    const loginUser = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           // Redirect to profile.html 
           window.location.href = "../profile.html";
        })
        .catch((error) => {
          console.log("Error Logging in : ", error.message);
        });
    }

    // Signout
    const logoutUser = ()=>{
        
        signOut(auth)
        .then(() => {
            // Redirect to signin.html
            window.location.href="../signin.html";
        }).catch((error) => {
            console.log("Error Logging out : ", error.message);
        });

    }
    
    // Reset Password
    const resetPassword = async(email,msg)=>{
        try{
            await sendPasswordResetEmail(auth, email);

            msg.textContent = "Password reset email sent. please check your inbox.";
            msg.style.color = "green";
            msg.style.fontSize = "11px";
            
        }catch(error){

            console.error("Error sending password reset email = ", error.message);

            msg.textContent = `Error : ${error.message}`;
            msg.style.color = "red";
            msg.style.fontSize = "11px";
            
        }
    }

    // Google Signin
    const googleLogin = ()=>{

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            // Redirect to profile.html 
            window.location.href = "../profile.html";
        }).catch((error) => {
            console.log("Error with Google sign-in : ", error.message);
        });

    }
    
    // Auth Check
    const isLoggedIn = ()=>{
        onAuthStateChanged(auth, (userdata) => {
            if (userdata) {
                return true;
            } else {
                // Redirect to signin.html 
                window.location.href = "../signin.html";
            }
          });
    }

    // Get User Info
    const getUser = (callback)=>{
        // callback("Hello Sir");
        onAuthStateChanged(auth, (userdata)=>{
            if(userdata){
                callback(userdata);
            }
        })
    }

    return {registerUser, loginUser, logoutUser, resetPassword, googleLogin, isLoggedIn, getUser}
}

// 5FT 