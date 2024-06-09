"use client";

import Layout from './components/layout';
import HeroSlider from "./components/heroSlider";
import Button from "./components/button";
import FindOrder from "./components/findOrder";
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
          <p className="HeroSubText">Your reliable partner for all your needs</p>
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
