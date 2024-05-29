"use client";
import { useCallback, useEffect, useState } from "react";
import { orderApi } from "../api/orderApi";
import { Meal, OrderType } from "../api/types";

const Order = ({ order }: { order: Meal }) => {
  // Use the context
  // If the context is true, show button, else hide the button
  const contextValue = true;
  return (
    <p key={order.idMeal}>
      {contextValue && (
        <button
          type="button"
          onClick={() => {
            console.log("delete, should be hidden when context is toggled off");
          }}
        >
          Delete
        </button>
      )}
      {order.idMeal}: {order.strMeal}
    </p>
  );
};


const Orders = () => {
  const [orders, setOrders] = useState<OrderType[]>();

  const fetchOrder = useCallback(async () => {
    const fetchOrders = await orderApi.getOrders();
    setOrders(fetchOrders);
  }, []);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  if (!orders) {
    return <p>Loading...</p>;
  }

  return (
 
        <div className="DivOrders">
            <h1>Order List</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <h2>Order for {order.email}</h2>
                        <p>Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                        <h3>Dish: {order.dish.name}</h3>
                        <p>Description: {order.dish.description}</p>
                        <p>Dish price: {order.dish.price}</p>
                        <h3>Drinks:</h3>
                        <ul>
                            {order.drinks.map(drink => (
                                <li key={drink.id}>
                                    {drink.name} - {drink.description}: {drink.price}
                                </li>
                            ))}
                        </ul>
                        <p>Total: {order.totalAmount}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
