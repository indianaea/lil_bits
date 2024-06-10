"use client";

import { useEffect, useState } from "react";
import { OrderType, DishType, DrinkType } from "../../api/types";
import { orderApi } from "../../api/orderApi";
import Button from '../../components/button';
import "./confirm.css";

const TotalOrder: React.FC = () => {
  const [newOrder, setNewOrder] = useState<OrderType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
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
    //alert(`Diskur : ${JSON.stringify(selectedDish)}`);
    const selectedDrinks = getLocalStorageItem<DrinkType[]>("selectedDrinks", []);
    //alert(`Drykkir : ${JSON.stringify(selectedDrinks)}`);

    let newOrder: OrderType = {
      id: 0,
      orderDate: new Date(),
      dish: selectedDish,
      drinks: selectedDrinks,
      email: "",
      totalAmount: 0,
      count: 0,
      time: ""
    };

    setNewOrder(newOrder);
    setIsLoading(false);
  }, []);

  const getLocalStorageItem = <T,>(key: string, defaultValue: T): T => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : defaultValue;
  };

  const getLocalStorageString = (key: string, defaultValue: string): string => {
    return localStorage.getItem(key) || defaultValue;
  };

  const confirmOrder = async () => {
    if (!newOrder) return;
    try {newOrder
      newOrder.email = getLocalStorageString("savedOrderEmail", "");
      newOrder.orderDate = new Date(getLocalStorageString("selectedDate", new Date().toISOString()));
      newOrder.time = getLocalStorageString("selectedTime", "");
      newOrder.count = getLocalStorageItem<number>("numberOfPeople", 0);

      const amount = newOrder.dish.price + newOrder.drinks.reduce((total, drink) => total + drink.price, 0);

      newOrder.totalAmount = amount * newOrder.count;

      const savedOrderId = Number(localStorage.getItem('savedOrderId')) || 0;
      newOrder.id = savedOrderId;

      if(savedOrderId != 0){
        alert(`Uppfæri pöntun : ${JSON.stringify(newOrder)}`);
        const response = await orderApi.updateOrder(newOrder);
      }
      else {
        alert(`Vista nýja pöntun : ${JSON.stringify(newOrder)}`);
        const response = await orderApi.postOrder(newOrder);
      }

    } catch (err) {
      console.error('Error posting order:', err);
    }   
    localStorage.setItem('newOrder', JSON.stringify(newOrder));    
    window.location.href = "/order/receipt";
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Button onClick={confirmOrder} caption="Confirm order"/>
    </>
  );
};

export default TotalOrder;
