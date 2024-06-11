"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./navbar.css";
import Link from "next/link";

const getPageName = (pathname: string): string => {
    if (pathname.includes("/order/confirm")) {
        return "Confirm";
    } else if (pathname.includes("/order/receipt")) {
        return "Receipt";
    } else if (pathname.includes("/order/drink")) {
        return "Drinks";
    } else if (pathname.includes("/order")) {
        return "Order";
    } else if (pathname.includes("/aboutUs")) {
        return "About us";
    } else {
        return "Home";
    }
};


export const NavbarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const pageName = getPageName(pathname);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="navbar">
                <div className="container">
                    <Link href="/" className="logo">
                        <img src="/lilbits.png" alt="Website Logo" />
                    </Link>
                    <div className="rightContainer">
                        <div className="mobileCurrentPage">
                            {pageName}
                        </div>
                        <button className="menuBtn" onClick={toggleMenu}>
                            <img src="/hamburger-icon.svg" alt="Menu" className="icon" />
                        </button>
                    </div>
                    <ul className="desktopMenu">
                        <li>
                            <Link href="/order">Order</Link>
                        </li>
                        <li>
                            <Link href="/aboutUs">About us</Link>
                        </li>
                        <li className="current-page">
                            {pageName}
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`mobileMenuWrapper ${isOpen ? "open" : ""}`}>
                <ul className="mobileMenu">
                    <li>
                        <Link href="/order">Order</Link>
                    </li>
                    <li>
                        <Link href="/aboutUs">About Us</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

const Navbar = () => {
    return <NavbarMenu />;
};

export default Navbar;
