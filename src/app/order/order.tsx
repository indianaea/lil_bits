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
      {order.strMeal}: {order.strMeal}
    </p>
  );
};

const Orders = () => {
  const [orders, setOrders] = useState<Meal[]>();

  const fetchOrder = useCallback(async () => {
    const fetchOrders = await orderApi.getOrders();
    setOrders(fetchOrders.meals);
  }, []);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  if (!orders) {
    return <p>Loading...</p>;
  }

  console.log("Orders is: ", orders)

  return (
    // <---1 Wrap this component with a context
    <div className="m-10">
      {orders.map((order) => (
        <Order order={order} key={order.strMeal} />
      ))}
    </div>
    // 1--->
  );
};

export default Orders;
