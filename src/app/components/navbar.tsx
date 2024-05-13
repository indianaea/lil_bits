"use client";
import { useEffect, useState } from "react";
import "./navbar.css"
import Link from "next/link";


export const NavbarMenu = () => {
    return (
        <nav>
            <Link href="/" className="Logo">Website</Link>
            <ul>
            <li>
            <Link href="/order">Order dish</Link>
            </li>
            <li>
            <Link href="/aboutUs">About us</Link>
            </li>
            <li>
            <Link href="/menu">Menu</Link>
            </li>
            </ul>
        </nav>
        )
};


const Navbar = () => {
    return (
        // <---1 Wrap this component with a context
        <div className="navbar">{<NavbarMenu />}</div>
        // 1--->
    );
};

export default Navbar;