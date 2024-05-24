"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


const Routers = () => {
    return (
        <div>
        <div className="HeaderClass">{<Navbar />}</div>
        <div className="HeaderClass">{<Footer />}</div>
        </div>
    );
};

export default Routers;