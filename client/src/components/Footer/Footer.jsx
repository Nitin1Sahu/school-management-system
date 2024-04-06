import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__section1">
          <img src={logo} alt="" />
          <p>Made with ❤ by Dev</p>
          <div className="social">
            <div>
              <FaLinkedin />
            </div>
            <div>
              <RiTwitterXLine />
            </div>
            <div>
            <FaYoutube />
            </div>

          </div>
          <p>2024 © All Rights Reserved</p>
        </div>
        <div className="footer__section2">
          <Link to="/">About</Link>
          <Link to="/our-mission">Out mission</Link>
          <Link to="privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-serice">Terms of Service</Link>
        </div>
        <div className="footer__section3">
          <Link to="/facitity">Facility</Link>
          <Link to='faculty'>Faculty</Link>
          <Link to="/admission">Join Our Academy</Link>
          <Link to="/philanthropist">Specials Thanks</Link>
        </div>
      </footer>
    </>
  )
}

export default Footer