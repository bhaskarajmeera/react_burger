import React from "react";


const Hero = () => {
  return (
    <section className="hero"> 
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Fresh. Juicy. Made with Love.</h1>
          <p className="hero-subtext">
            Handcrafted Burgers • Loaded Fries • Thick Milkshakes
          </p>
          {/* <div className="hero-buttons">
            <button className="btn primary">Order Now</button>
            <button className="btn secondary">View Menu</button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
