import React from 'react';
import logo from "../assets/BurgerYard.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="BurgerYard" className="footer-logo" />
          <h3>BurgerYard</h3>
          <p>Fresh. Juicy. Made with Love.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 The Mark Hotel, 46 Dickson St,Lambton, NSW 2299</p>
          <p>📞 +61 451 449 096</p>
          <p>✉️ info@burgeryard.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BurgerYard. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
