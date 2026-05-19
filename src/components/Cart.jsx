import React from "react";
import img1 from "../assets/yardspecial.png";
import milkshake from "../assets/milkshake.png"

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Yard Special Burger",
      price: 15,
      qty: 1,
      img: img1,
    },
    {
      id: 2,
      name: "Loaded Fries",
      price: 8.9,
      qty: 1,
      img: milkshake,
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="cart" id="cart">
        <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} className="cart-img" />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>

              <div className="qty-controls">
                <button>-</button>
                <span>{item.qty}</span>
                <button>+</button>
              </div>
            </div>

            <button className="remove-btn">✕</button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>

        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
    </section>
    
  );
};

export default Cart;
