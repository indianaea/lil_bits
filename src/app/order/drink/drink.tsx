"use client";
import React, { useState, useEffect } from 'react';
import { coctailApi } from "../../api/coctailApi";
import { OrderType, DishType, DrinkType } from "../../api/types";
import './drink.css';
import Button from '../../components/button';

const DrinkSelector: React.FC = () => {
  const [drinks, setDrinks] = useState<DrinkType[]>([]);
  const [selectedDrinks, setSelectedDrinks] = useState<DrinkType[]>([]);

  useEffect(() => {
    const fetchDrinkList = async () => {
      try {
        const fetchedDrinks: DrinkType[] = await coctailApi.getDrinks();
        const savedOrder = getSavedOrder();       

        const normalizedDrinks = fetchedDrinks.map(drink => ({
          ...drink,
          id: Number(drink.id),
        }));
        
        setDrinks(normalizedDrinks);

        if (savedOrder.email) {
          const preSelectedDrinks = normalizedDrinks.filter(drink =>
            savedOrder.drinks.some(savedDrink => savedDrink.id === drink.id)
          );
          setSelectedDrinks(preSelectedDrinks);
        }
        
      } catch (error) {
        console.error('Failed to fetch drinks:', error);
      }
    };

    fetchDrinkList();
  }, []);

  const getSavedOrder = () => {
    const emptyDish: DishType = {
      id: 0,
      category: "",
      cousine: "",
      description: "",
      imageSource: "",
      name: "",
      price: 0,
    };

    const emptyOrder: OrderType = {
      id: 0,
       email: "",
       dish: emptyDish,
       drinks: [],
       count: 0,
       time: "",
       orderDate: new Date(),
       totalAmount: 0,
    };

    const order = getLocalStorageItem<OrderType>("savedOrder", emptyOrder);      
    return order;

  };

  const getLocalStorageItem = <T,>(key: string, defaultValue: T): T => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : defaultValue;
  };


  const getRandomBorderClass = () => {
    const borderClasses = ["yellow-border", "green-border", "red-border"];
    return borderClasses[Math.floor(Math.random() * borderClasses.length)];
  };

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
