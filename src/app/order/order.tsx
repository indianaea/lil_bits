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
      //console.log(`Getting order from api: ${savedOrderId}`);

      const savedOrder = await orderApi.getOrder(savedEmail);
      setDish(savedOrder.dish);
      setSelectedDish(savedOrder.dish);
    } else {
      //console.log(`Getting random dish`);

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
    //console.log('Confirmed selected dish:', selectedDish);
    localStorage.setItem('selectedDish', JSON.stringify(selectedDish));
    nextPage();
  };

  return (
    <div className="OrdersContainer">
      {dish && selectedDish && (
        <div key={dish.id} className="DishSelected">
          <img src={dish.imageSource} alt={dish.name} className="DishImage" />
          <div className="DishDetailsContainer">
            <div className="RedSquare">
              <div className="DishDetails">
                <p className="DishName">{dish.name}</p>
                <p className="DishDescription">{dish.description}</p>
                <p className="DishPrice">Price: {dish.price} kr</p>
              </div>
              <div className="ButtonContainer">
                <button className="GetRandomDishButton" onClick={getRandomDish}>Get random dish</button>
                <button className="GoToDrinkPageButton" onClick={confirmSelection}>Select drinks
                <img src="arrow.svg" alt="Arrow" className="arrow-icon"/>
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
