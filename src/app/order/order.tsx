"use client";

import { useCallback, useEffect, useState } from "react";
import { orderApi } from "../api/orderApi";
import { DishType } from "../api/types";
import Button from '../components/button';
import "./order.css";

const Orders = () => {
  const [dish, setDish] = useState<DishType | undefined>(undefined);
  const [selectedDish, setSelectedDish] = useState<DishType | undefined>(undefined);

  const getRandomDish = useCallback(async () => {
    const fetchDish = await orderApi.getRandomDish();
    setDish(fetchDish);
    setSelectedDish(fetchDish);
  }, []);

  const nextPage = async () => {
    window.location.href = "/order/drink";
  };

  useEffect(() => {
    getRandomDish();
  }, [getRandomDish]);

  const confirmSelection = () => {
    console.log('Confirmed selected dish:', selectedDish);
    //alert(`You have confirmed your selection: ${JSON.stringify(selectedDish)}`);
    localStorage.setItem('selectedDish', JSON.stringify(selectedDish));
    nextPage();
  };

  return (
    <>
      <div className="OrdersContainer">
        {dish && selectedDish && (
          <div key={dish.id} className="DishSelected">
            <img src={dish.imageSource} alt={dish.name} className="DishImage" />
            <div className="DishDetails">
              <p className="DishName">{dish.name}</p>
              <p className="DishDescription">{dish.description}</p>
              <p className="DishPrice">Price: ${dish.price.toFixed(2)}</p>
              <div className="ButtonContainer">
                <button className="GetRandomDishButton" onClick={getRandomDish}>Get Random Dish</button>
                <button className="GoToDrinkPageButton" onClick={confirmSelection}>Go To Drink Page</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
