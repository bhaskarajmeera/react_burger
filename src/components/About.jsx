import React from 'react'
import logo from "../assets/BurgerYard.png";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">

        <div className="about-text">
          <h2>About BurgerYard</h2>
          <p>
            At <strong>BurgerYard</strong>, we believe great food starts with passion.
            From handcrafted patties to freshly baked buns, every bite is made
            with love, flavour, and a whole lot of attitude.
          </p>

          <p>
            What started as a small food truck in Newcastle has grown into a
            community favourite — known for bold flavours, loaded fries, and
            thick milkshakes that hit different.
          </p>

          <div className="about-highlights">
            <div className="highlight-box">🔥 Fresh Ingredients</div>
            <div className="highlight-box">🍔 Handcrafted Burgers</div>
            <div className="highlight-box">🍟 Loaded Sides</div>
            <div className="highlight-box">🥤 Thick Milkshakes</div>
          </div>
        </div>

        <div className="about-image">
          <img src={logo} alt="BurgerYard About" />
        </div>

      </div>
    </section>
  )
}
