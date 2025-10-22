import React from "react";
import "../styles/Homepage.css";
import Navbar from "../components/common/Navbar";
import Loading from "../components/common/Loading";
import LoginPopup from "./Login";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {

  let [showlogin,setShowLogin] = useState(false);
  let navigate = useNavigate();

  return (
    <main className="main">
      <div className="home-page">
        
          <Navbar />
       
        <div className="home-header">
          <p>Welcome to FoodApp</p>
          <h1>Wake Up Early,</h1>
          <h1>Eat Fresh & Healthy</h1>
        </div>

        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            magnam. Iste, ratione laboriosam rerum ipsum dolores velit nemo
            sequi non facilis impedit debitis nisi modi beatae, voluptate
            architecto dolor minus!
          </p>

          <button onClick={()=> navigate('/menu')}>Get Started</button>
          <button style={{marginLeft:"1rem"}} onClick={()=> setShowLogin(true)}>Sign In</button>
          {showlogin &&  <LoginPopup onClose={() => setShowLogin(false)} />}
        </div>

        <div className="popular">
          <div className="p1">
            <div className="img"></div>
            <p>Popular Dish 1</p>
            <span>Price: $10</span>
          </div>
          <div className="p2">
            <div className="img"></div>
            <p>Popular Dish 2</p>
            <span>Price: $12</span>
          </div>
          <div className="p3">
            <div className="img"></div>
            <p>Popular Dish 3</p>
            <span>Price: $14</span>
          </div>
          <div className="p4">
            <div className="img"></div>
            <p>Popular Dish 4</p>
            <span>Price: $16</span>
          </div>
        </div>

      
      </div>
    </main>
  );
}

export default HomePage;
