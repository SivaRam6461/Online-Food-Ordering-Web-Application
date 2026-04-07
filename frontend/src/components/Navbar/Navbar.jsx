import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  const store = useContext(StoreContext);
  const auth = useContext(AuthContext);

  // Safety check
  if (!store || !auth) return null;

  const { getTotalCartAmount } = store;
  const { user, logout } = auth;

  return (
    <div className="navbar">

      <Link to="/">
        <img src={assets.logo} className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link to="/">home</Link>
        <a href="#explore-menu">menu</a>
        <a href="#app-download">mobile-app</a>
        <a href="#footer">contact us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} />

        <Link to="/cart">
          <img src={assets.basket_icon} />
          {getTotalCartAmount() > 0 && <div className="dot" />}
        </Link>

        {user ? (
          <> <div className="pro">
            <Link to="/profile">Profile</Link> 
            </div>
            <button onClick={logout}>Logout</button>
            
          </>
        ) : (
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        )}
      </div>

    </div>
  );
};

export default Navbar;
