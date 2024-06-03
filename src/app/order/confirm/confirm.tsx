"use client";

import { useEffect, useState } from "react";
import { OrderType, DishType, DrinkType } from "../../api/types";
import Button from '../../components/button';
import "./confirm.css";

const TotalOrder: React.FC = () => {
  const [newOrder, setNewOrder] = useState<OrderType | null>(null);

  useEffect(() => {
    const getLocalStorageItem = <T,>(key: string, defaultValue: T): T => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) as T : defaultValue;
    };

    const emptyDish: DishType = {
      id: 0,
      category: "",
      cousine: "",
      description: "",
      imageSource: "",
      name: "",
      price: 0,
    };

    const selectedDish = getLocalStorageItem<DishType>("selectedDish", emptyDish);
    const selectedDrinks = getLocalStorageItem<DrinkType[]>("selectedDrinks", []);

    const calculateTotalPrice = (): number => {
      return selectedDish.price + selectedDrinks.reduce((total, drink) => total + drink.price, 0);
    };

    const order: OrderType = {
      id: 1,
      orderDate: new Date(),
      dish: selectedDish,
      drinks: selectedDrinks,
      email: "",
      totalAmount: calculateTotalPrice(),
      count: 1,
      time: ""
    };

    localStorage.setItem('newOrder', JSON.stringify(order));
    setNewOrder(order);
  }, []);

  const confirmOrder = async () => {
    window.location.href = "/order/receipt";
  };

  if (!newOrder) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="confirm-container">
        <h1>Total Amount</h1>
          <p><strong>{newOrder.totalAmount.toFixed(0)}</strong></p>
      </div>
      <Button onClick={confirmOrder} caption="Go to Receipt Page"/>
    </>
  );
};

export default TotalOrder;
