import React from 'react';
import './style.css';
const  Navbar = () => {
  return (
    <div className="header">
      <div className="header-container">
      <div className="header-logo">
        <img src="./images/LOGO.svg" className="logo-img" alt="logo" />
      </div>
      <ul className= "nav">
        <li className="nav-item"> <a href="#home" >الصفحة الرئيسية </a></li>
    
        <li className="nav-item"><a href="#about" >من نحن </a></li>
        <li className="nav-item"><a href="#" >ماذا نقدم </a></li>
        <li className="nav-item"><a href="#">المسارات </a></li>
        <li className="nav-item"><a href="#" >أعمالنا </a></li>
        <li className="nav-item"><a href="#" >فريقنا  </a></li>
      </ul>
      <button className="request-invite-btn">انضم لنا </button>
    </div>
    </div>
  );
}

export default Navbar;

