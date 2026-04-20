import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const store = useContext(StoreContext);
  const auth = useContext(AuthContext);

  if (!store || !auth) return null;

  const { getTotalCartAmount } = store;
  const { user, logout } = auth;

  // Sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${sticky ? "sticky" : ""}`}>
      
      <Link to="/" className="logo">
        <img src={assets.logo} alt="logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <a href="#explore-menu">Menu</a>
        <a href="#app-download">Mobile App</a>
        <a href="#footer">Contact</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <Link to="/cart" className="cart-icon">
          <img src={assets.basket_icon} alt="" />
          {getTotalCartAmount() > 0 && <div className="dot" />}
        </Link>

        {user ? (
          <>
            <Link to="/profile" className="profile-link">Profile</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">
            <button className="signin-btn">Sign In</button>
          </Link>
        )}

        {/* Hamburger */}
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
