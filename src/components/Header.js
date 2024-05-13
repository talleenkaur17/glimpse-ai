import React, { useEffect } from 'react'
import logo from '../LOGOS/logo.png';
import login from '../LOGOS/login.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);
  const showGPTSearch=useSelector((store)=>store.gpt.showGPTSearch);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  const handleGPTSearchClick=()=>{
    dispatch(toggleGPTSearchView());
  }
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));

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
    <div className='absolute top-0 left-0 w-screen bg-gray-200 flex items-center justify-between shadow-lg z-10 px-4 py-2'>
  <img className='w-20 h-20' src={logo} alt="Logo" />
  <div className="flex items-center">
    {user && (
      <div className="flex items-center">{
        showGPTSearch &&(
        <select className='p-2 bg-gray-300 text-black mr-4 rounded-lg' onClick={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
       
       
      </select>

      )}
       
         <button className='font-bold text-blue-600 bg-gray-300 rounded-lg py-2 px-4 mr-4' onClick={handleGPTSearchClick}>{
          showGPTSearch?"HomePage":"GPT Search"
         }</button>
        <button className='font-bold text-blue-600 bg-gray-300 rounded-lg py-2 px-4 mr-4' onClick={handleSignOut}>Sign Out</button>
       
      </div>
    )}
    <img className='w-12 h-12 ml-4' src={login} alt="Login" />
  </div>
</div>

   
  )
}

export default Header
