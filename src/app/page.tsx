"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./components/navbar";
import HeroSlider from "./components/heroSlider"; // Adjust the path as necessary
import Footer from "./components/footer"; // Adjust the path as necessary
import Button from "./components/button"; // Adjust the path as necessary
import './common.css';  

const nextPage = async () => {
  window.location.href = "/order";
};

export default function FrontPage() {
  return (
    <>
      <div className="page-body">
        <div className="page-header">
          <Navbar />
        </div>
        <div className="page-main">
          <HeroSlider />
          <Button onClick={nextPage} caption="Order"/> 
        </div>
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}