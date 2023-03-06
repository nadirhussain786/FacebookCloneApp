/* eslint-disable no-unused-vars */
import React from "react";
import  "./Login.css";
import {auth, provider} from "./firebase";

// import { provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
// import { auth } from "./firebase";
 import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";
//  import { actionTypes } from "./Reducer";


 function Login() {

   const [ user , dispatch ] = useStateValue("");
   
     const  signIn = () => {   

     signInWithPopup(auth ,provider)
     .then((result)=> {            
        dispatch({
        type:actionTypes.SET_USER,
        user: result.user,
     }, [] );
      
    
    })
     .catch((error)=> alert(error.message));      
     
    };
    
  return (
    
    <div className='login'>
     
      <div>
      <img src='https://www.facebook.com/images/fb_icon_325x325.png' alt='facebook logo'/>
      <img src='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-15.png' alt='Facebook logo text'/>
      </div>
      
      <button type='submit' onClick={signIn}  >Sign In</button>
      
    
    </div>
  )
}

export default Login;