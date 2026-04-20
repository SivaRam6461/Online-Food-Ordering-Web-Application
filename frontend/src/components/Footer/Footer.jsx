import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Welcome to Restaurant Name, where every dish tells a story of flavor and tradition. 
                    From our kitchen to your table, we are committed to using the freshest local 
                    ingredients to create unforgettable dining experiences. 
                     Stay connected with us on social media for the latest seasonal specials and exclusive offers.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                
            </div>
             <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 123-456-789</li>
                    <li>contact@restaurant.com</li>
                </ul>

                
            </div>
             
        </div>
        <hr />
        <div className="footer-copyright">Copyright 2025 restaurant.com - All Right Reserved.</div>
      
    </div>
  )
}

export default Footer
