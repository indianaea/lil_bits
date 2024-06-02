"use client";

import { useEffect, useState } from "react";
import { OrderType, DishType, DrinkType, Provision } from "../../api/types";
import OrderItem from "../../components/orderItem";
import "./confirm.css";

const TotalOrder: React.FC = () => {

  const getSelectedDish = (): DishType => {
    if (typeof window !== "undefined" && window.localStorage) {
      let dishString = localStorage.getItem("selectedDish");

      let emptyDish: DishType = {
        id: 0,
        category: "",
        cousine: "",
        description: "",
        imageSource: "",
        name: "",
        price: 0,
      };

      if (dishString) {
        try {
          const dish: DishType = JSON.parse(dishString) as DishType;
          return dish;
        } catch (error) {
          console.error("Error parsing dish from localStorage", error);
          return emptyDish;
        }
      } else {
        console.log("No dish found in localStorage");
        return emptyDish;
      }
    } else {
      return {
        id: 0,
        category: "",
        cousine: "",
        description: "",
        imageSource: "",
        name: "",
        price: 0,
      };
    }
  };

  const getSelectedDrinks = (): DrinkType[] => {
    if (typeof window !== "undefined" && window.localStorage) {
      let drinksString = localStorage.getItem("selectedDrinks");
      if (drinksString) {
        try {
          const drinks: DrinkType[] = JSON.parse(drinksString) as DrinkType[];
          return drinks;
        } catch (error) {
          console.error("Error parsing drinks from localStorage", error);
          return [];
        }
      } else {
        console.log("No drinks found in localStorage");
        return [];
      }
    } else {
      return [];
    }
  };

  const selectedDish = getSelectedDish();
  const selectedDrinks = getSelectedDrinks();

  const calculateTotalPrice = (): number => {
    let total = selectedDish.price;
    selectedDrinks.forEach(drink => {
      total += drink.price;
    });
    return total;
  };

  const getOrder = (): OrderType => {
    let newOrder: OrderType = {
      id: 1,
      orderDate: new Date(),
      dish: selectedDish, 
      drinks: selectedDrinks,
      email: "indianaeir@gmail.com",
      totalAmount: calculateTotalPrice(),
      count: 0,
      date: new Date(),
    };
    return newOrder;
  }

  const newOrder = getOrder();

  return (
    <div className="confirm-container">

    <h1>Total order</h1>
    <p>{newOrder.id}</p>
    <p>{newOrder.dish.name}</p>

    {newOrder.drinks.map((drink) => (
        <div>
        <p>{drink.id}</p>
        <p>{drink.name}</p>
        </div>
    ))}

    <p>{newOrder.totalAmount.toFixed(0)}</p>

    </div>
  );
};

export default TotalOrder;
