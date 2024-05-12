"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./components/navbar";


const Routers = () => {
    return (
        // <---1 Wrap this component with a context
        <div className="HeaderClass">{<Navbar />}</div>
        // 1--->
    );
};

export default Routers;