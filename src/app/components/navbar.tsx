"use client";
import { useEffect, useState } from "react";
import "./navbar.css"
import Link from "next/link";


export const NavbarMenu = () => {
    return (
        <div className="container">
            <Link href="/" className="logo">
                <img src="/lilbits.png" alt="Website Logo" />
            </Link>
            <ul className="desktopMenu">
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
        // <---1 Wrap this component with a context
        <div className="navbar">{<NavbarMenu />}</div>
        // 1--->
    );
};

export default Navbar;