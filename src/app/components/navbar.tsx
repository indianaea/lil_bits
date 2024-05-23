"use client";
import { useEffect, useState } from "react";
import "./navbar.css"
import Link from "next/link";


const Navbar = () => {
    return (
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src="lilbits.png" alt="Logo" />
          </div>
          <div className="desktopMenu">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="menuBtn">
            {/* Add your mobile menu button/icon here */}
          </div>
          <div className="mobileMenu">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;