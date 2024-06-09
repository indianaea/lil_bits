"use client";
import { useState } from "react";
import "./navbar.css"
import Link from "next/link";


export const NavbarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container">
            <Link href="/" className="logo">
                <img src="/lilbits.png" alt="Website Logo" />
            </Link>
            <button className="menuBtn" onClick={toggleMenu}>
                <img src="/hamburger-icon.svg" alt="Menu" className="icon" />
            </button>
            <ul className={`desktopMenu ${isOpen ? "mobileMenu" : ""}`}>
                <li>
                    <Link href="/order">Order dish</Link>
                </li>
                <li>
                    <Link href="/aboutUs">About us</Link>
                </li>
                <li>
                    <Link href="/menu">Menu</Link>
                </li>
                <li>
                    <Link href="/order/drink">Drinks</Link>
                </li>
            </ul>
        </div>
    );
};

const Navbar = () => {
    return (
        <div className="navbar">{<NavbarMenu />}</div>
    );
};

export default Navbar;
