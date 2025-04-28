import React from 'react'
import Button from './utilitycomponent/Button'

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="logo container">
          <h1><a href=""><img src="/logo1.png" alt="" /></a></h1>
        </div>
        <nav className="nav-links container">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="hero ">
        <div className="hero-section">
          <h1 className="heading">Raining Offers For Hot Summer!</h1>
          <p className="para">25%Off On All Products</p>
          <div className="btn">
            <Button className="shop-btn" name="SHOP NOW"/>
            <Button className="shop-btn" name="FIND MORE"/>
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
