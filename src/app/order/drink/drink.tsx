"use client";
import React, { useState, useEffect } from 'react';
import { coctailApi } from "../../api/coctailApi";
import { DrinkType } from "../../api/types";
import './drink.css';

const DrinkSelector: React.FC = () => {
  const [drinks, setDrinks] = useState<DrinkType[]>([]);
  const [selectedDrinks, setSelectedDrinks] = useState<number[]>([]);

  useEffect(() => {
    const fetchDrinkList = async () => {
      const fetchedDrinks = await coctailApi.getDrinks();
      // Ensure all ids are numbers
      const normalizedDrinks = fetchedDrinks.map(drink => ({
        ...drink,
        id: Number(drink.id),
      }));
      setDrinks(normalizedDrinks);
    };

    fetchDrinkList();
  }, []);


  const toggleDrinkSelection = (id: number) => {
    setSelectedDrinks(prevSelected => {
      const newSelected = prevSelected.includes(id)
        ? prevSelected.filter(drinkId => drinkId !== id)
        : [...prevSelected, id];
        
      localStorage.setItem('selectedDrinks', JSON.stringify(newSelected));
      console.log(`Drink is selected: ${newSelected}`);
  
      return newSelected;
    });
  };


  const isDrinkSelected = (id: number) => selectedDrinks.includes(id);


  return (
    <>
      <div className="drink-list-container">
        <div className="DivDrinks">
          {drinks.map(drink => (
            <div
              key={drink.id}
              className={`drink ${isDrinkSelected(drink.id) ? 'selected' : ''}`}
              onClick={() => toggleDrinkSelection(drink.id)}
              >
              <img src={drink.imageSource} alt={drink.name} />
              <p>{drink.name}</p>
              <p>Price: {drink.price.toFixed(0)}</p>
              {isDrinkSelected(drink.id) && (
                <span className="checkmark" style={{ color: '#C16757' }}>✔️</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DrinkSelector;