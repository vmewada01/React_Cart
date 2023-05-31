// Navbar.js
import "../App.css"
import React, { useContext, useEffect, useState } from 'react';
import axios from "axios"
import img from "../Images/logo.png"
import {NavLink} from "react-router-dom"
import { ThemeContext } from '../Context/ThemeContext';
import AllRoutes from "../Routes/AllRoutes";
import Footer from "./Footer";
import { Button, Spacer } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'



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
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding:"20px", backgroundColor:"#f5f5f5"}}>
      <div>
        <img src={img} alt="Logo" width="90px" height="90px"  />
      </div>
      <ul style={{display: "flex", justifyContent:"space-between", gap:"20px"}}>
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
      <div style={{display:"flex" , gap:"10px" , flexDirection:"row"}}>
   
        <Button onClick={handleLoginLogout} style={{padding: "8px 16px", backgroundColor:"#ff3366", color:" #ffffff",border:"none", borderRadius:"4px", cursor:"pointer"}}  >
        <NavLink
               style={{color:  "#ffffff"}}
                key="LoginPage"
                to="/LoginPage"
              >
              Login
              </NavLink>
        </Button>
        <Button  style={{padding: "8px 16px", backgroundColor:"#ff3366", color:" #ffffff",border:"none", borderRadius:"4px", cursor:"pointer"}}  >
        <NavLink
               style={{color:  "#ffffff"}}
                key="cartItem"
                to="/cart"
              >
              Cart
              </NavLink>
        </Button>
        <Button onClick={toggleTheme} style={{padding: "8px 16px", backgroundColor:"#ff3366", color:" #ffffff",border:"none",  borderRadius:"50%", cursor:"pointer"}}>
        
       {isLight ? <MoonIcon /> :  <SunIcon />}
            </Button>
       
      </div>
      <br />
      <br />
      </div>
    
     
    </div>

  );
};

export default Navbar;
