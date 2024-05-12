"use client";
import { useEffect, useState } from "react";
import "./navbar.css"
import Link from "next/link";


export const NavbarMenue = () => {
    return (
        <nav>
            <ul>
            <li>
            <Link href="/order">Order dish</Link>
            </li>
            <li>
            <Link href="/home">About us</Link>
            </li>
            <li>
            <Link href="/menue">Menue</Link>
            </li>
            </ul>
        </nav>
        )
};


const Navbar = () => {
    return (
        // <---1 Wrap this component with a context
        <div className="Navbar">{<NavbarMenue />}</div>
        // 1--->
    );
};

export default Navbar;