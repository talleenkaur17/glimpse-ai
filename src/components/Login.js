import React, { useRef } from 'react'
import Header from './Header'
import  background from"../LOGOS/background.jpg"
import { useState } from 'react'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate=useNavigate();
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    
    const[isSignInForm,setisSignInForm]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);
    const handleButtonOnClick=()=>{
      //console.log(email.current.value);
      
     const formData = {
    name: name.current ? name.current.value : null,
    email: email.current.value,
    password: password.current.value,
  };

  const message = checkValidData(formData, isSignInForm);
  setErrorMessage(message);
  if (message) return;
  if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      navigate("/browse");
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message);
    });
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage);
    // ..
  });
  }

  else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+" "+errorMessage);
  });

  }

    }
    const toggleSignInForm=()=>{
        setisSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header/>
      <div  className='absolute inset-0 overflow-auto' >
        <img src={background}alt="background"/>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-16 shadow-md opacity-75">
      <form onSubmit={(e)=>e.preventDefault()} >
        <h1 className='font-bold text-3xl underline'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input ref={name}className='p-2 m-2 block w-full' type="text" placeholder='Name' ></input>}
        <input ref={email} className='p-2 m-2 block w-full' type="text" placeholder='Email' ></input>
        <input ref={password} className='p-2 m-2 block w-full'type="password" placeholder='Password'></input>
       
        <button  onClick={handleButtonOnClick} className="p-2 bg-blue-800 text-white rounded-lg font-bold">{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='text-red-500'>{errorMessage}</p>
        <p  onClick={toggleSignInForm} className='pt-3 font-bold cursor-pointer'>{isSignInForm?" New to GLIMPSE AI? Sign Up Now":"Already Registered? Sign In Now."}</p>
      </form> 
      </div>
    </div>
  )
}

export default Login
