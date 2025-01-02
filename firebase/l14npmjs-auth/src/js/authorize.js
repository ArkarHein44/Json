import { auth } from "./firebase.js";

export function Authorize(){
    // Signup
    const registerUser = async(fullname, email, password)=>{
        
    }
    
    // Signin
    const loginUser = (email, Password)=>{

    }

    // Signout
    const logoutUser = ()=>{

    }
    
    // Reset Password
    const resetPassword = (email,msg)=>{

    }

    // Google Signin
    const googleLogin = ()=>{

    }
    
    // Auth Check
    const isLoggedIn = ()=>{

    }

    // Get User Info
    const getUser = (callback)=>{

    }

    return {registerUser, loginUser, logoutUser, resetPassword, googleLogin, isLoggedIn, getUser}
}
