"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export const HeaderComponent = () => {
    return (
        <div>
            {/* Some components within the header of the page */}
            <Link href="/components/homeScreen">My girl expenses</Link>
            <Link href="/components/homeScreen ">My self</Link>
        </div>
    );
};

const Routers = () => {
    return (
        // <---1 Wrap this component with a context
        <div className="m-10">{<HeaderComponent />}</div>
        // 1--->
    );
};

export default Routers;