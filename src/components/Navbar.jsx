import React from 'react'
import logo from "../assets/navbarlogo.png";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          src={logo}
          alt="BurgerYard Logo"
          className="navbar-logo"
        />
        <h2 className="brand">BurgerYard</h2>
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="#menu">Menu</a>
        <a href="#cart">Cart</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
