import React from 'react';
import './Header.css'
import logo from '../../Assets/Images/twitter-logo.png'
const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="" />
        <h1>Tweets simulator</h1>
    </div>
  )
}

export default Header