"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./components/navbar";
import HeroSlider from "./components/heroSlider"; // Adjust the path as necessary
import Footer from "./components/footer"; // Adjust the path as necessary
import './common.css';  

export default function FrontPage() {
  return (
    <>
      <div className="page-body">
        <div className="page-header">
          <Navbar />
        </div>
        <div className="page-main">
          <HeroSlider />
        </div>
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}