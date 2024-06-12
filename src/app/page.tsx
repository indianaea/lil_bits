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
      <div className="heroSection">
        <div className="heroText">
          <h1>Welcome to our Lil' Bits</h1>
          <p className="heroSubText">Order food, drinks and a table for you and your loved<br/>ones for a warm stay with us.</p>
          <Button onClick={nextPage} caption="Order" />
        </div>
        <HeroSlider />
      </div>
      <div className="findOrderSection">
        <FindOrder />
      </div>
    </Layout>
  );
};

export default FrontPage;
