import React from 'react';
import img1 from "../assets/yardspecial.png";
import milkshake from "../assets/milkshake.png"


export const Menu = () => {
  const items = [
    {
      name: "Yard Special Burger",
      price: "$15",
      img: img1,
      desc: "Wagyu Beef, American Cheese, Pickled Gherkins, Fresh Lettuce, Slaw ,Jalapenos, Yard Signature Sauce & Spicy Peri Sauce."
    },
    {
      name: "Backyard Clasic",
      price: "$15",
      img: img1,
      desc: "Wagyu Beef, American Cheese, Red Onion, Pickled Gherkins, Fresh Lettuce, Tomotoes, Yard Signature Sauce & Trufle Sauce. "
    },
    {
      name: "Spicy Fire Burger",
      price: "$13.99",
      img: img1,
      desc: "Jalapeños, spicy mayo & pepper jack cheese."
    },
    {
      name: "Chicken Crunch Burger",
      price: "$11.99",
      img: img1,
      desc: "Crispy fried chicken, lettuce & creamy mayo."
    },
    {
      name: "Loaded Fries",
      price: "$15",
      img: img1,
      desc: "Cheese sauce, bacon bits & spring onions."
    },
    {
      name: "Thick Milkshake",
      price: "$8.90",
      img: milkshake,
      desc: "Vanilla, chocolate or strawberry."
    }
  ];
  
  return (
    <>
    <section className="menu" id="menu">
      <h2 className="menu-title">Our Menu</h2>

      <div className="menu-grid">
        {items.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.img} alt={item.name} className="menu-img" />
            <h3>{item.name}</h3>
            <p className="menu-desc">{item.desc}</p>
            <p className="menu-price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
