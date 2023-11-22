import './header.css';
import React from 'react';
import logo from '../images/logo.png'

function Header() {
  return (
    <>
      <div className ="headerBlock">
        <img src = {logo} alt = "logo" className='headerLogoImg'/>
        <div className='headerMenu'>
          <div className='headerMenuText'>Startups</div>
          <div className='headerMenuText'>Contact</div>
          <div className='headerMenuBtn'>Work with us!</div>
        </div>
      </div> 
    </>
  ) ;
}

export default Header;