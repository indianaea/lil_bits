"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from './components/layout';
import HeroSlider from "./components/heroSlider"; // Adjust the path as necessary
import Button from "./components/button"; // Adjust the path as necessary
import './common.css';  

const nextPage = async () => {
  window.location.href = "/order";
};

const FrontPage = () => {
  return (
    <Layout>
      <HeroSlider />
      <Button onClick={nextPage} caption="Order" />
    </Layout>
  );
};

export default FrontPage;

/* 
export default function FrontPage() {
  return (
    <Layout>
      <HeroSlider />
      <Button onClick={nextPage} caption="Order" />
    </Layout>  
  );
}
*/