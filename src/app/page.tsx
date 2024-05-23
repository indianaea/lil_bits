"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./components/navbar";
import HeroSlider from "./components/heroSlider"; // Adjust the path as necessary

export default function FrontPage() {
  return (
    <>
      <Navbar />
      <HeroSlider />
    </>
  );
}