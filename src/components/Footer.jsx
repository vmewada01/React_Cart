// Footer.js
import "../App.css"
import img  from "../Images/logo.png"
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={img} alt="Logo" width="80px" style={{height: "80px"}}/>
      </div>
      <div>
        <ul>
          <li>
            <h3 > <a style={{color:"#e6004c"}} href="https://facebook.com">Facebook</a></h3>
           
          </li>
          <li>
            <h3 >
            <a style={{color:"#e6004c"}} href="https://twitter.com">Twitter</a>
            </h3>
            
          </li>
          <li>
            <h3>
            <a style={{color:"#e6004c"}} href="https://instagram.com">Instagram</a>
            </h3>
           
          </li>
          <li>
            <h3>
            <a style={{color:"#e6004c"}} href="/about">About</a>
            </h3>
         
          </li>
          <li>
            <h3>
            <a style={{color:"#e6004c"}} href="/contact">Contact</a>
            </h3>
            
          </li>
        </ul>
      </div>
      <div>
        <h4 style={{textAlign: "center" , color:"#e6004c"}}>
          This ecommerce app is dedicated to providing the best online shopping experience. Browse our wide range of products, including electronics, fashion, home goods, and more. Shop with confidence and enjoy fast shipping and excellent customer service.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
