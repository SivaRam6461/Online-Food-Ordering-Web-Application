import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">

      <div className="overlay"></div>

      <div className="header-content">
        <h1>Delicious Food Delivered Fast</h1>

        <p>
          Experience the best meals from your favorite restaurants delivered
          straight to your door.
        </p>

        <div className="header-buttons">
          <button className="primary">Explore Menu</button>
          <button className="secondary">Order Now</button>
        </div>
      </div>

    </div>
  );
};

export default Header;
