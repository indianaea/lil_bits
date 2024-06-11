"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


const Routers = () => {
    return (
        <div>
        <div className="headerClass">{<Navbar />}</div>
        <div className="headerClass">{<Footer />}</div>
        </div>
    );
};

export default Routers;