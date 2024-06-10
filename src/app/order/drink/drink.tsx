"use client";
import React, { useState, useEffect } from 'react';
import { coctailApi} from "../../api/coctailApi";
import { orderApi } from "../../api/orderApi";
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

        const savedOrderId = Number(localStorage.getItem('savedOrderId')) || 0;
        //console.log(`Drink window, orderid : ${savedOrderId}`)

        const normalizedDrinks = fetchedDrinks.map(drink => ({
          ...drink,
          id: Number(drink.id),
        }));
        
        setDrinks(normalizedDrinks);

        if (savedOrderId != 0) {
          const savedEmail = getLocalStorageString('savedOrderEmail', "");
          const savedOrder = await orderApi.getOrder(savedEmail);
          
          const preSelectedDrinks = normalizedDrinks.filter(drink =>
            savedOrder.drinks.some(savedDrink => savedDrink.id === drink.id)
          );
          setSelectedDrinks(preSelectedDrinks);
          localStorage.setItem('selectedDrinks', JSON.stringify(preSelectedDrinks));
        }
        
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

      //alert(`Valinn drykkur: ${JSON.stringify(newSelected)}`);

      localStorage.setItem('selectedDrinks', JSON.stringify(newSelected));
      return newSelected;
    });
  };

  const getLocalStorageString = (key: string, defaultValue: string): string => {
    return localStorage.getItem(key) || defaultValue;
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
