import React from 'react';
import './Footer.scss';
import { Link } from "react-router-dom";

function Footer() {
  return (
      <footer className='footer-distributed d-flex justify-between align-center'>
      <img src="/images/logo-small.png" width={80} height={45}></img>
  <div className='footer-right'>
              <ul className='footer-links d-flex flex-wrap  align-center'>
                  <li>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                      <Link to='/about'>About</Link>
                  </li>
                  <li>
                      <Link to='/sneakers'>Sneakers</Link>
                  </li>
                  <li>
                      <Link to='/accessories'>Accessories</Link>
                  </li>
                  <li>
                      <Link to='/contacts'>Contacts</Link>
                  </li>
                  <li>
                      <Link to='/delivery'>Delivery</Link>
                  </li>
              </ul>         
  </div>
  <div className='footer-left d-flex flex-wrap '>

              <a href='#'>  <img src="/images/black-instagram.svg" alt="inst" width={20} /></a>
              <a href='#'>  <img src="/images/github.svg" alt="github" width={20} /></a>
              <a href='#'>  <img src="/images/email-round.svg" alt="github" width={20} /></a>
              <a href='#'>  <img src="/images/facebook-round-line.svg" alt="github" width={20} /></a>

  </div>
          <p className='footer-label'>ReactShoes &copy; 2022</p>

  </footer>
  )
}

export default Footer;
