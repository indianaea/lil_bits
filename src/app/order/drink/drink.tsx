"use client";
import React, { useState, useEffect } from 'react';
import { coctailApi } from "../../api/coctailApi";
import { DrinkType } from "../../api/types";
import './drink.css';
import Button from '../../components/button';

const DrinkSelector: React.FC = () => {
  const [drinks, setDrinks] = useState<DrinkType[]>([]);
  const [selectedDrinks, setSelectedDrinks] = useState<DrinkType[]>([]);

  useEffect(() => {
    const fetchDrinkList = async () => {
      try {
        const fetchedDrinks: DrinkType[] = await coctailApi.getDrinks();
        const normalizedDrinks = fetchedDrinks.map(drink => ({
          ...drink,
          id: Number(drink.id),
        }));
        setDrinks(normalizedDrinks);
      } catch (error) {
        console.error('Failed to fetch drinks:', error);
      }
    };

    fetchDrinkList();
  }, []);

  const getRandomBorderClass = () => {
    const borderClasses = ["yellow-border", "green-border", "red-border"];
    return borderClasses[Math.floor(Math.random() * borderClasses.length)];
  };

  const toggleDrinkSelection = (id: number) => {
    setSelectedDrinks(prevSelected => {
      const newSelected = prevSelected.some(drink => drink.id === id)
        ? prevSelected.filter(drink => drink.id !== id)
        : [...prevSelected, drinks.find(drink => drink.id === id)!];

      localStorage.setItem('selectedDrinks', JSON.stringify(newSelected));
      return newSelected;
    });
  };

  const confirmSelection = () => {
    //alert(`You have confirmed your selection: ${JSON.stringify(selectedDrinks)}`);
    window.location.href = "/order/confirm";
  };

  return (
    <>
      <div className="DrinksContainer">
        {drinks.map(drink => (
          <div
            key={drink.id}
            className={`drink ${selectedDrinks.some(d => d.id === drink.id) ? 'selected' : ''}`}
            onClick={() => toggleDrinkSelection(drink.id)}
          >
            <img src={drink.imageSource} alt={drink.name} className={getRandomBorderClass()} />
            <p>{drink.name}</p>
            <p>Price: {drink.price.toFixed(0)}</p>
            {selectedDrinks.some(d => d.id === drink.id) && (
              <span className="checkmark">✔️</span>
            )}
          </div>
        ))}
      </div>
      <Button onClick={confirmSelection} caption="Confirm drinks" />
    </>
  );
};

export default DrinkSelector;
