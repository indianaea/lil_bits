"use client";

import { useCallback, useEffect, useState } from "react";
import { orderApi } from "../api/orderApi";
import { OrderType, DishType } from "../api/types";
import "./order.css";

const Orders = () => {
  const [dish, setDish] = useState<DishType | undefined>(undefined);
  const [selectedDish, setSelectedDish] = useState<DishType | undefined>(undefined);

  const getDish = useCallback(async () => {
    const savedOrder = getSavedOrder();       
    
    if (savedOrder.email) {
      setDish(savedOrder.dish);
      setSelectedDish(savedOrder.dish);
      //alert(`Dish set for: ${savedOrder.email}`);
    } else {
      const randomDish = await orderApi.getRandomDish();
      setDish(randomDish);
      setSelectedDish(randomDish);
    }

  }, []);

  const nextPage = async () => {
    window.location.href = "/order/drink";
  };

  useEffect(() => {
    getDish();
  }, [getDish]);


  const getSavedOrder = () => {
    const emptyDish: DishType = {
      id: 0,
      category: "",
      cousine: "",
      description: "",
      imageSource: "",
      name: "",
      price: 0,
    };

    const emptyOrder: OrderType = {
      id: 0,
       email: "",
       dish: emptyDish,
       drinks: [],
       count: 0,
       time: "",
       orderDate: new Date(),
       totalAmount: 0,
    };

    const order = getLocalStorageItem<OrderType>("savedOrder", emptyOrder);      
    return order;
  };

  const getLocalStorageItem = <T,>(key: string, defaultValue: T): T => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : defaultValue;
  };

  const confirmSelection = () => {
    console.log('Confirmed selected dish:', selectedDish);
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
                <button className="GetRandomDishButton" onClick={getDish}>Get random dish</button>
                <button className="GoToDrinkPageButton" onClick={confirmSelection}>Selects drinks
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
