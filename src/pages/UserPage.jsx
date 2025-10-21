import React from "react";
import "../styles/Userpage.css";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      name: "Cheese Pizza",
      price: "$10",
      desc: "Delicious cheese pizza topped with mozzarella, tomato sauce, and basil.",
      imgClass: "pizza",
    },
    {
      id: 2,
      name: "Juicy Burger",
      price: "$8",
      desc: "Grilled beef patty with melted cheese, lettuce, and signature sauce.",
      imgClass: "burger",
    },
    {
      id: 3,
      name: "Iced Coffee",
      price: "$4",
      desc: "Cold and refreshing coffee brewed to perfection.",
      imgClass: "drink",
    },
    {
      id: 4,
      name: "Chocolate Cake",
      price: "$6",
      desc: "Rich chocolate dessert with creamy frosting and cocoa layers.",
      imgClass: "dessert",
    },
  ];

  return (
    <section className="user-main">
      <div className="user-page">
        <div className="greeting">
          <p>Hello, Customer!</p>
          <h2>Welcome From our FoodApp</h2>
        </div>

        <div className="categories">
          <div className="searchbar">
            <input type="text" placeholder="Search your favorite food..." />
            <button>Search</button>
          </div>
          <h3>Explore Categories</h3>
          <div className="category-list">
            <div className="category-item">Pizza</div>
            <div className="category-item">Burgers</div>
            <div className="category-item">Drinks</div>
            <div className="category-item">Desserts</div>
          </div>
        </div>

        <div className="menu">
          <h3>Our Menu</h3>
          <div className="menu-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item.id}>
                <div className={`menu-img ${item.imgClass}`}></div>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <div className="menu-btns">
                  <button className="order-btn">Order Now</button>
                  <button
                    className="detail-btn"
                    onClick={() => navigate(`/menu/${item.id}`, { state: item })}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserPage;
