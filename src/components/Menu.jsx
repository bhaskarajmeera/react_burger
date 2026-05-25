
import img1 from "../assets/yardspecial.png";
import milkshake from "../assets/milkshake.png"




export const Menu = () => {
  const items = [
    {
    id: 1,
    name: "Yard Special Burger",
    description:
      "Wagyu Beef, American Cheese, Pickled Gherkins, Fresh Lettuce, Slaw, Jalapenos, Yard Signature Sauce & Spicy Peri Sauce.",
    price: 15,
    img: img1,
  },
  {
    id: 2,
    name: "Backyard Classic",
    description:
      "Wagyu Beef, American Cheese, Red Onion, Pickled Gherkins, Fresh Lettuce, Tomatoes, Yard Signature Sauce & Truffle Sauce.",
    price: 15,
    img: img1,
  },
  {
    id: 3,
    name: "Spicy Fire Burger",
    description: "Jalapeños, spicy mayo & pepper jack cheese.",
    price: 13.99,
    img: img1,
  },
  {
    id: 4,
    name: "Chicken Crunch Burger",
    description: "Crispy fried chicken, lettuce & creamy mayo.",
    price: 11.99,
    img: img1,
  },
  {
    id: 5,
    name: "Loaded Fries",
    description: "Cheese sauce, bacon bits & spring onions.",
    price: 15,
    img: img1,
  },
  {
    id: 6,
    name: "Thick Milkshake",
    description: "Vanilla, chocolate or strawberry.",
    price: 8.9,
    img: milkshake,
  },
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
            <p className="menu-desc">{item.description}</p>
            <p className="menu-price">${item.price}</p>
            <div className="hero-buttons">
            <button className="btn primary">Add to cart</button>
          </div>
          </div>
        ))}
      </div>
        
    </section>
    </>
  )
}
