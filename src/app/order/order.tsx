"use client";

import { useEffect, useState } from "react";
import { orderApi } from "../api/orderApi";
import { DishType } from "../api/types";
import "./order.css";

const Orders = () => {
  const [dish, setDish] = useState<DishType | undefined>(undefined);
  const [selectedDish, setSelectedDish] = useState<DishType | undefined>(undefined);

  const getDish = async () => {       
    const savedOrderId = Number(localStorage.getItem('savedOrderId')) || 0;
    
    if (savedOrderId !== 0) {
      const savedEmail = getLocalStorageString('savedOrderEmail', "");
      const savedOrder = await orderApi.getOrder(savedEmail);

      setDish(savedOrder.dish);
      setSelectedDish(savedOrder.dish);
    } else {
      const randomDish = await orderApi.getRandomDish();
      setDish(randomDish);
      setSelectedDish(randomDish);
    }
  };

  const getRandomDish = async () => {
    console.log(`Getting random dish`);
    const randomDish = await orderApi.getRandomDish();
    setDish(randomDish);
    setSelectedDish(randomDish);
  };

  const nextPage = () => {
    window.location.href = "/order/drink";
  };

  useEffect(() => {
    getDish();
  }, []);

  const getLocalStorageString = (key: string, defaultValue: string): string => {
    return localStorage.getItem(key) || defaultValue;
  };

  const confirmSelection = () => {
    localStorage.setItem('selectedDish', JSON.stringify(selectedDish));
    nextPage();
  };

  return (
    <div className="ordersContainer">
      {dish && selectedDish && (
        <div key={dish.id} className="dishSelected">
          <img src={dish.imageSource} alt={dish.name} className="dishImage" />
          <div className="dishDetailsContainer">
            <div className="redSquare">
              <div className="dishDetails">
                <p className="dishName">{dish.name}</p>
                <p className="dishDescription">{dish.description}</p>
                <p className="dishPrice">Price: {dish.price} kr</p>
              </div>
              <div className="buttonContainer">
                <button className="getRandomDishButton" onClick={getRandomDish}>Get random dish</button>
                <button className="goToDrinkPageButton" onClick={confirmSelection}>Select drinks
                <img src="arrow.svg" alt="Arrow" className="arrowIcon"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
