import React from 'react'
import './footer.css'
import footer_logo from '../../../../assets/logo.webp'
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Brian Logo" width="140" />
          <p>I make software solutions to real world problems</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; {new Date().getFullYear()} Brian Kipkemboi Kosgei. All rights reserved.</p>
        <div className="footer-bottom-right">
          <div className="social-icons">
            <a href="https://www.instagram.com/i29102005?dlrf=MXQxbGRnemRkZ2k3OQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={28} />
            </a>
            <a href="https://tiktok.com/@..brian00" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={26} />
            </a>
            <a href="https://www.facebook.com/kosgeibriann" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={28} />
            </a>
            <a href="https://github.com/briankosgei260-alt" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer