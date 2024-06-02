"use client";

import { useEffect, useState } from "react";
import { OrderType, DishType, DrinkType } from "../../api/types";
import Button from '../../components/button';
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
    if (typeof window !== "undefined" && window.localStorage) {
      let newOrder: OrderType = {
        id: 1,
        orderDate: new Date(),
        dish: selectedDish, 
        drinks: selectedDrinks,
        email: "",
        totalAmount: calculateTotalPrice(),
        count: 1,
        date: new Date()};
      localStorage.setItem('newOrder', JSON.stringify(newOrder));
      return newOrder;
    } else {
      return {
        id: 0,
        email: "",
        dish: {id: 0, category: "", cousine: "", description: "", imageSource: "", name: "", price: 0}, 
        drinks: [],
        count: 0,
        date: new Date(),
        orderDate: new Date(),       
        totalAmount: 0};
    } 
  }

  const newOrder = getOrder();

  const confirmOrder = async () => {
    window.location.href = "/order/receipt";
  };

  return (
    <>
    <div className="confirm-container">

        <h1>Order total amount</h1>
        <p>{newOrder.totalAmount.toFixed(0)}</p>

    </div>
    <Button onClick={confirmOrder} caption="Go Receipt Page"/> 
    </>
  );
};

export default TotalOrder;
