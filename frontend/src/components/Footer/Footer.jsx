import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit earum mollitia deserunt consequuntur enim eveniet eum ea, quibusdam odit necessitatibus sint corrupti recusandae laudantium similique porro quod blanditiis, sapiente minima!</p>
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
                    <li>contact@tomato.com</li>
                </ul>

                
            </div>
             
        </div>
        <hr />
        <div className="footer-copyright">Copyright 2025 Tomato.com - All Right Reserved.</div>
      
    </div>
  )
}

export default Footer
