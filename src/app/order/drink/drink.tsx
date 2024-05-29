"use client";
import { useCallback, useEffect, useState } from "react";
import { coctailApi } from "../../api/coctailApi";
import { DrinkType } from "../../api/types";

const DrinkList = () => {
    const [drinks, setDrinks] = useState<DrinkType[]>();
  
    const fetchDrink = useCallback(async () => {
      const fetchDrinks = await coctailApi.getDrinks();
      setDrinks(fetchDrinks);
    }, []);
  
    useEffect(() => {
      fetchDrink();
    }, [fetchDrink]);
  
    if (!drinks) {
      return <p>Loading...</p>;
    }
  
    return (
        <div className="DivDrinks">
          <h1>Drink List</h1>
          <ul>
            {drinks.map(drink => (
              <li key={drink.id}>
                {drink.name} - {drink.description}: {drink.price}
              </li>
            ))}
          </ul>
        </div>
      );
  };
  

const Drinks = () => {
    return (
        <div>DrinkList</div>
    );
};

export default DrinkList;