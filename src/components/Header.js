import React, { useEffect } from 'react'
import logo from '../LOGOS/logo.png';
import login from '../LOGOS/login.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
      
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
       
      }
    });
    return()=>unsubscribe();
         
  },[]);
  return (
    (<div className='absolute top-0 left-0 w-screen bg-gray-200 flex shadow-lg z-10 justify-between'>
      <img className='w-20 h-30' src={logo} alt="Logo"  />
     <div >
      <img  className=' p-2 w-15 h-14 ' src={login} alt="Logo"  />
    {user &&   <button className=' font-bold text-blue-600 pr-2 mr-5 bg-gray-300 rounded-lg p-3' onClick={handleSignOut}>Sign Out</button>}  
      </div>

      
    </div>
  )
  )
}

export default Header
