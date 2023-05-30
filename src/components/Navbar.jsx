// Navbar.js
import "../App.css"
import React, { useContext, useEffect, useState } from 'react';
import axios from "axios"
import img from "../Images/logo.png"
import {NavLink} from "react-router-dom"
import { ThemeContext } from '../Context/ThemeContext';
import AllRoutes from "../Routes/AllRoutes";
import Footer from "./Footer";



const Navbar = ({ isLoggedIn, onLogin, onLogout }) => {
  //  const theme = useContext(ThemeContext)
  //  const toggleTheme = useContext(ThemeContext)
  //  const isLight = useContext(ThemeContext)
   const {theme, toggleTheme, isLight}= useContext(ThemeContext)
   console.log(isLight)
 
const links =[
    {
        title: "Home",
        to: "/"
    },
    {
        title: "Products",
        to: "/Products"
    },
    {
        title: "Mens",
        to: "/Mens"
    },
    {
        title: "Womens",
        to: "/Womens"
    }
 

]
// style={({ isActive }) => (isActive ? activeStyle : Style)}
const Style = {
    color: "black"
  };
  const activeStyle = {
    color: "rgb(255,51,102)"
  };

const handleLoginLogout =()=>{

}



  return (
    <div>
    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", padding:"20px", backgroundColor:"#f5f5f5"}}>
      <div style={{height: "50px"}}>
        <img src={img} alt="Logo" width="70px" height="90px"  />
      </div>
      <ul style={{display: "flex", justifyContent:"space-around", gap:"20px"}}>
    {
        links.map((link)=>{
            return (
                <li key={link.id}> <NavLink
                style={({ isActive }) => (isActive ? activeStyle : Style)}
                key={link.title}
                to={link.to}
              >
                {link.title}
              </NavLink></li>
              
            )
        })
    }
      </ul>
      <div style={{display:"flex" , gap:"20px" , flexDirection:"row",}}>
        <button onClick={handleLoginLogout} style={{padding: "8px 16px", backgroundColor:"#ff3366", color:" #ffffff",border:"none", borderRadius:"4px", cursor:"pointer"}}  >
        <NavLink
               style={{color:  "#ffffff"}}
                key="LoginPage"
                to="/LoginPage"
              >
              Login
              </NavLink>
        </button>
        <button  style={{padding: "8px 16px", backgroundColor:"#ff3366", color:" #ffffff",border:"none", borderRadius:"4px", cursor:"pointer"}}  >
        <NavLink
               style={{color:  "#ffffff"}}
                key="cartItem"
                to="/cart"
              >
              Cart
              </NavLink>
        </button>
        <button onClick={toggleTheme} style={{padding: "8px 16px", backgroundColor:"#ff3366", color:" #ffffff",border:"none",  borderRadius:"50%", cursor:"pointer"}}>
            
       {isLight ? 'dark' : 'light'}
            </button>
       
      </div>
      <br />
      <br />
      </div>
    
     
    </div>

  );
};

export default Navbar;
