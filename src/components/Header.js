import React from 'react'
import logo from '../LOGOS/logo.png';
import login from '../LOGOS/login.png';
import { signOut } from 'firebase/auth';
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    (<div className='absolute top-0 left-0 w-screen bg-gray-200 flex shadow-lg z-10 justify-between'>
      <img className='w-20 h-30' src={logo} alt="Logo"  />
     <div >
      <img  className=' p-2 w-15 h-14 ' src={login} alt="Logo"  />
    {user &&   <button className='font-bold text-blue-600 pr-2' onClick={handleSignOut}>Sign Out</button>}  
      </div>

      
    </div>
  )
  )
}

export default Header
