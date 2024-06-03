 

import { useEffect, useState } from "react";
import { OrderType} from "../../api/types";
import "./receipt.css";

const OrderReceipt: React.FC = () => {

  const getOrder = (): OrderType => {
    if (typeof window !== "undefined" && window.localStorage) {
      let orderString = localStorage.getItem("newOrder");

      let emptyOrder: OrderType = {
        id: 0,
        email: "",
        dish: {id: 0, category: "", cousine: "", description: "", imageSource: "", name: "", price: 0}, 
        drinks: [],
        count: 0,
        date: new Date(),
        orderDate: new Date(),       
        totalAmount: 0,
      };

      if (orderString) {
        try {
          const order: OrderType = JSON.parse(orderString) as OrderType;
          order.email = getEmail();
          order.count = getNumberOfPeople();
          order.orderDate = getDate();
          return order;
        } catch (error) {
          console.error("Error parsing dish from localStorage", error);
          return emptyOrder;
        }
      } else {
        console.log("No dish found in localStorage");
        return emptyOrder;
      }
    } else {
      return {
        id: 0,
        email: "",
        dish: {id: 0, category: "", cousine: "", description: "", imageSource: "", name: "", price: 0}, 
        drinks: [],
        count: 0,
        date: new Date(),
        orderDate: new Date(),       
        totalAmount: 0,
      };
    }
  };

  const getEmail = (): string => {
    const email = localStorage.getItem("email");
    return email || "";
  } 

  const getDate = (): Date => {
    const dateString = localStorage.getItem("selectedDate");
    return dateString ? new Date(dateString) : new Date();  
  }

  const getTime = (): string => {
    const time = localStorage.getItem("selectedTime");
    return time || "";
  } 

  const getNumberOfPeople = (): number => {
    const count = localStorage.getItem("numberOfPeople");
    return count ? parseInt(count, 10) || 0 : 0; 
  }
  
  const newOrder = getOrder();

  return (
    <> <div>
        <h1>Order summary</h1>
        <div className="receipt-container">
              <p>{newOrder.dish.name}</p>
              <p>{newOrder.email}</p>
              <p>{newOrder.count}</p>
              <p>{newOrder.totalAmount.toFixed(0)}</p>
            </div>
        </div> 
    </>
  );
};

export default OrderReceipt;
