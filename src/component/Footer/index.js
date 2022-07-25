import React from 'react';
import './style.css';
import {
    FaFacebook,
    FaTelegram,
    FaLinkedin
  } from 'react-icons/fa';
const  Footer = () => {
return (
  <div className="footer">
    <div className="footer-links">
                <div className="copyRight">
                    <p>&copy; 2022 TG Developers</p>
                    </div>
                    <div className="footer-link-items">
                 <a href="#" > سياسة الخصوصية </a>
               
                </div>
                <div className="socialMedia">
                <div className="socialIcons">
                <a href="//www.facebook.com/" className='facebook social' target='_blank' aria-label='Facebook'>
                       <FaFacebook />
                        </a>
                        <a href="//www.linkedin.com/" className='linkedin'target='_blank' aria-label='Youtube'>
                     
                       <FaLinkedin />
                        </a>
                        <a href="//www.telegram.com//" className='telegram social' target='_blank' aria-label='Twitter' >
                        <FaTelegram />
                        </a>
                    <a href="#" > تواصل معنا  </a>
                </div>
                </div>
                
    
    </div>
</div>
)
}
export default Footer;