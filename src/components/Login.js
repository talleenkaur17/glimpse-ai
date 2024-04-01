import React from 'react'
import Header from './Header'
import  background from"../LOGOS/background.jpg"
import { useState } from 'react'

const Login = () => {

    const[isSignInForm,setisSignInForm]=useState(true);
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
      <form >
        <h1 className='font-bold text-3xl underline'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input className='p-2 m-2 block w-full' type="text" placeholder='Name' ></input>}
        <input className='p-2 m-2 block w-full' type="text" placeholder='Email' ></input>
        <input className='p-2 m-2 block w-full'type="password" placeholder='Password'></input>

        <button   className="p-2 bg-blue-800 text-white rounded-lg font-bold">{isSignInForm?"Sign In":"Sign Up"}</button>
        <p  onClick={toggleSignInForm} className='pt-3 font-bold cursor-pointer'>{isSignInForm?" New to GLIMPSE AI? Sign Up Now":"Already Registered? Sign In Now."}</p>
      </form> 
      </div>
    </div>
  )
}

export default Login
