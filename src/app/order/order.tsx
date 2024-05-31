"use client";
import { useCallback, useEffect, useState } from "react";
import { orderApi } from "../api/orderApi";
import { DishType, DrinkType, OrderType } from "../api/types";
import "./order.css";

const Order = ({ dish }: { dish: DishType | undefined }) => {
  // Use the context
  // If the context is true, show button, else hide the button
  const contextValue = true;

  if (!dish) {
    return <p>No dish found</p>;
  }
  return (
    <p key={dish.id}>
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
      {dish.id}: {dish.name} - {dish.price}
    </p>
  );
};


const Orders = () => {
  const [dish, setDish] = useState<DishType>();

  const getRandomDish = useCallback(async () => {
    const fetchDish = await orderApi.getRandomDish();
    setDish(fetchDish);
    localStorage.setItem("dish", JSON.stringify(fetchDish));
  }, []);



  const nextPage = async () => {
    window.location.href = "/order/drink";
  }


  useEffect(() => {
    getRandomDish();
  }, [getRandomDish]);



  return (

    <div className="DivOrders">
      <h1>Order List</h1>
      <ul>

        <div className="DishContainer">
          <Order dish={dish} />
        </div>
        <button className="ActionButton" onClick={getRandomDish}>Get Random Dish</button>
        <button className="ActionButton" onClick={nextPage}>Go To Drink Page</button>

        {/* {orders.map(dish => (
          <li key={dish.id}>
            <h2>Order for {dish.email}</h2>
            <p>Date: {new Date(dish.orderDate).toLocaleDateString()}</p>
            <h3>Dish: {dish.dish.name}</h3>
            <p>Description: {dish.dish.description}</p>
            <p>Dish price: {dish.dish.price}</p>
            <h3>Drinks:</h3>
            <ul>
              {dish.drinks.map(drink => (
                <li key={drink.id}>
                  {drink.name} - {drink.description}: {drink.price}
                </li>
              ))}
            </ul>
            <p>Total: {dish.totalAmount}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Orders;