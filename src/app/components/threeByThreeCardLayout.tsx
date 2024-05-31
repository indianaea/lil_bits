"use client";

import { useEffect, useState, ReactNode } from "react";
import Link from "next/link";

const ThreeByThreeCardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="threeByThreeGrid">
            {children}
        </div>
    );
}



export default ThreeByThreeCardLayout;