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
    window.location.href = "/order/confirm";
  };

  return (
    <>
      <div className="DrinksContainer">
        {drinks.map(drink => (
          <div
            key={drink.id}
            className={`drink ${selectedDrinks.some(d => d.id === drink.id) ? 'selected' : ''}`}
          >
            <img src={drink.imageSource} alt={drink.name} />
            <div style={{ paddingTop: '80px' }}> {/* Adjust padding for content below the image */}
              <p>{drink.name}</p>
              <p className="price">Price: {drink.price} kr</p>
              <button
                className={`button ${selectedDrinks.some(d => d.id === drink.id) ? 'selected' : ''}`}
                onClick={() => toggleDrinkSelection(drink.id)}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
      <Button onClick={confirmSelection} caption="Confirm drinks" />
    </>
  );
};

export default DrinkSelector;
