"use client";

import { useCallback, useEffect, useState } from "react";
import { OrderType, DishType} from "../../api/types";
import { orderApi } from "../../api/orderApi";
import "./receipt.css";
import Button from '../../components/button';

const OrderReceipt: React.FC = () => {
  const [newOrder, setNewOrder] = useState<OrderType | null>(null);

  useEffect(() => {
    const getLocalStorageItem = <T,>(key: string, defaultValue: T): T => {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
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

    const getOrder = (): OrderType => {
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

      const order = getLocalStorageItem<OrderType>("newOrder", emptyOrder);      
      return order;
    };

    setNewOrder(getOrder());
  }, []);

  const homePage = async () => {
    localStorage.clear();
    window.location.href = "/";
  };

  if (!newOrder) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="receipt-container">
        <h1>Order summary</h1>
        <div className="order-details">
          <p><strong>Email:</strong> {newOrder.email}</p>
          <p><strong>Date:</strong> {new Date(newOrder.orderDate).toLocaleDateString()}</p>
          <p><strong>People:</strong> {newOrder.count}</p>
          <p><strong>Time:</strong> {newOrder.time}</p>
        </div>
        <div className="order-details">
          <h2>Dish</h2>
          <p><strong>Name:</strong> {newOrder.dish.name}</p>
          <p><strong>Cousine:</strong> {newOrder.dish.cousine}</p>
          <p><strong>Description:</strong> {newOrder.dish.description}</p>
          <p><strong>Price:</strong> {newOrder.dish.price.toFixed(0)} kr</p>
        </div>
        <div className="order-details">
          <h2>Drinks</h2>
          {newOrder.drinks.length === 0 ? (
            <p>No drinks selected</p>
          ) : (
            newOrder.drinks.map(drink => (
              <div key={drink.id} className="drink-item">
                <p><strong>Name:</strong> {drink.name}</p>
                <p><strong>Price:</strong> {drink.price.toFixed(0)} kr</p>
              </div>
            ))
          )}
        </div>
        <div className="order-summary">
          <h2>Total Amount</h2>
          <p><strong>{newOrder.totalAmount.toFixed(0)} kr</strong></p>
        </div>
      </div>
      <Button onClick={homePage} caption="Back to home page"/>
    </>
  );
};

export default OrderReceipt;
