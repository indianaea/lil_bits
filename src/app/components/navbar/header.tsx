"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./header.css"

export const Navbar = () => {
    return (
        <div>
            {/* Some components within the header of the page */}
            <Link href="/components/homeScreen">My girl expenses</Link>
            <Link href="/components/homeScreen ">My self</Link>
        </div>
    );
};

const Header = () => {
    return (
        // <---1 Wrap this component with a context
        <div className="m-10">{<Navbar />}</div>
        // 1--->
    );
};

export default Header;