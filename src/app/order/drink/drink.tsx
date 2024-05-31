"use client";
import { useCallback, useEffect, useState } from "react";
import { coctailApi } from "../../api/coctailApi";
import { DishType, DrinkType } from "../../api/types";
import ThreeByThreeCardLayout from "@/app/components/threeByThreeCardLayout";
import OrderItem from "@/app/components/orderItem";
// const Order = ({ dish }: { dish: DishType | undefined }) => {

const DrinkList = () => {
  const [drinks, setDrinks] = useState<DrinkType[]>();
  const [counter, setCounter] = useState<number>(0);

  const fetchDrink = useCallback(async () => {
    const fetchDrinks = await coctailApi.getDrinks();
    setDrinks(fetchDrinks);
  }, []);

  const nextPage = async () => {
    window.location.href = "/order/confirm";
  }

  useEffect(() => {
    localStorage.setItem("dish", "");
    fetchDrink();
  }, [fetchDrink]);

  if (!drinks) {
    return <p>Loading...</p>;
  }

  return (
    <div className="DivDrinks">
      <h1>Drink List</h1>
      <div className="MaterialAndCounter">

        <ThreeByThreeCardLayout>
          {drinks.map((drink) => (
            <OrderItem key={drink.id} item={drink} click={nextPage} />
          ))}
        </ThreeByThreeCardLayout>
        <p>{counter}</p>
      </div>
    </div>
  );
};


export default DrinkList;