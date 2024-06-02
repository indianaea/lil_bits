"use client";
import React, { useState, useEffect } from 'react';
import { coctailApi } from "../../api/coctailApi";
import { DrinkType } from "../../api/types";
import './drink.css';
import Button from '../../components/button';

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

  const confirmSelection = () => {
    console.log('Confirmed selected drinks:', selectedDrinks);
    alert(`You have confirmed your selection: ${JSON.stringify(selectedDrinks)}`);
    
    window.location.href = "/order/confirm";
    
  };

  return (
    <>
        <div className="DrinksContainer">
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
                <span className="checkmark">✔️</span>
              )}
            </div>
          ))}
        </div>
        <Button onClick={confirmSelection} caption="Confirm drinks"/>
    </>
  );
};

export default DrinkSelector;