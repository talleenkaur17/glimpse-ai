import React from 'react'
import logo from '../LOGOS/logo.png';
const Header = () => {
  return (
    <div className='absolute top-0 left-0 w-screen bg-gray-200 flex shadow-lg z-10'>
      <img className='w-20 h-30' src={logo} alt="Logo"  />
    </div>
  )
}

export default Header
