import React from 'react'
import Button from './utilitycomponent/Button'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagramSquare, FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-first">
          <div className="footer-logo">
            <img src="/logo2.png" alt="" />
            <p>The best look anytime, anywhere</p>
          </div>
          <div className="footer-her">
            <h2>For Her</h2>
            <div>
              <ul>
                <li><a href="">Women Jeans</a></li>
                <li><a href="">Tops and Shirts</a></li>
                <li><a href="">Women jackets</a></li>
                <li><a href="">Heels and flats</a></li>
                <li><a href="">Women Accerssories</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-him">
            <h2>For Him</h2>
            <ul>
              <li><a href="" className="menshirts">Men Jeans</a></li>
              <li><a href="">Men Shirts</a></li>
              <li><a href="">Men Shoes</a></li>
              <li><a href="">Men Accessories</a></li>
              <li><a href="">Men Jacket</a></li>
            </ul>
          </div>
          <div className="footer-subscribe">
            <h2>Subscribe</h2>
            <input type="email" name="email" placeholder="Your email address" />
            <Button className="footer-button" name="SUBSCRIBE"/>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright 2025 Brandstore, Powered by Brandstore</p>
        <ul>
          <li>
            <a href=""><FaFacebook /></a>
          </li>
          <li>
            <a href=""><FaYoutube /></a>
          </li>
          <li>
            <a href=""><FaTwitter /></a>
          </li>
          <li>
            <a href=""><FaInstagramSquare /></a>
          </li>
          <li>
            <a href=""><FaGoogle /></a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
