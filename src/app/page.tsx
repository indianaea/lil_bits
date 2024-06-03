"use client";

import Layout from './components/layout';
import HeroSlider from "./components/heroSlider"; // Adjust the path as necessary
import Button from "./components/button"; // Adjust the path as necessary
import FindOrder from "./components/findOrder"; // Adjust the path as necessary
import './page.css';

const nextPage = async () => {
  window.location.href = "/order";
};

const FrontPage = () => {
  return (
    <Layout>
      <div className="HeroSection">
        <div className="HeroText">
          <h1>Welcome to Our Service</h1>
          <Button onClick={nextPage} caption="Order" />
        </div>
        <HeroSlider />
      </div>
      <div className="FindOrderSection">
        <FindOrder />
      </div>
    </Layout>
  );
};

export default FrontPage;
