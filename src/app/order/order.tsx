"use client";
import { useCallback, useEffect, useState } from "react";
import { orderApi } from "../api/orderApi";
import { DishType } from "../api/types";
import Button from '../components/button';
import "./order.css";

const RandomDish = () => {
  const [dish, setDish] = useState<DishType | undefined>(undefined);
  const [selectedDish, setSelectedDish] = useState<DishType | undefined>(undefined);

  const getRandomDish = useCallback(async () => {
    const fetchDish = await orderApi.getRandomDish();
    setDish(fetchDish);
    setSelectedDish(fetchDish);
    localStorage.setItem("dish", JSON.stringify(fetchDish));
    localStorage.setItem("selectedDish", JSON.stringify(fetchDish));
  }, []);

  const nextPage = async () => {
    window.location.href = "/order/drink";
  };

  useEffect(() => {
    getRandomDish();
  }, [getRandomDish]);

  const confirmSelection = () => {
    console.log('Confirmed selected dish:', selectedDish);
    alert(`You have confirmed your selection: ${JSON.stringify(selectedDish)}`);
    nextPage();
  };

  return (
    <>
      <div className="order-list-container">
        <div className="DivOrders">
          {dish && selectedDish && (
            <div
              key={dish.id}
              className={`dish selected`}
            >
              <p>{dish.name}</p>
              <img src={dish.imageSource} alt={dish.name} />
              <p>{dish.description}</p>
              <p>Price: {dish.price.toFixed(2)}</p>
            </div>
          )}
          <button className="ActionButton" onClick={getRandomDish}>Get Random Dish</button>
        </div>
        <Button onClick={confirmSelection} caption="Go To Drink Page"/> 
      </div>
    </>
  );
};

export default RandomDish;
