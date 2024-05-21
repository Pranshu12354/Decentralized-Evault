import React from 'react';
import './Navbar.css';
import { useState } from "react";
import logo from './VaultX-removebg-preview.png'
import { NavLink,Link } from 'react-router-dom';
import UserProfile from '../../pages/UserProfile/UserProfile';

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfileModal = () => {
    setShowProfile(!showProfile);
  };
  return (
    <div className='Container_Navbar'>
    <div className="Burger_Logo_Navbar">
        {/*<div className="Burger" onClick={()=>toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
  </div>*/}
        <Link to={"/"} className='Logo_Div_Navbar'>
        <img src alt=""  />
            <p className='logo_title_navbar'>VaultX</p>
        </Link>
    </div>
    <div class="reveal-text">Welcome to the Dashboard</div>

        <div className="auth_navbar">
        <button className="user_profile_button" onClick={toggleProfileModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30" fill="white"><path d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z"/></svg>
        
        </button>
        {/* Logout button */}
        <Link to={'/'} className="logout_button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"width="30" height="30" fill="white" ><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>
        </Link>
        
      </div>

      {showProfile && <UserProfile onClose={toggleProfileModal} />}
    </div>


  

  )
}

export default Navbar
