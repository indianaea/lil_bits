"use client";
import { useCallback, useEffect, useState } from "react";
import { coctailApi } from "../../api/coctailApi";
import { DishType, DrinkType } from "../../api/types";
import ThreeByThreeCardLayout from "@/app/components/threeByThreeCardLayout";
import OrderItem from "@/app/components/orderItem";
// const Order = ({ dish }: { dish: DishType | undefined }) => {

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
            <ThreeByThreeCardLayout>
                {drinks.map((drink) => (
                    <OrderItem key={drink.id} item={drink} />
                ))}
            </ThreeByThreeCardLayout>
        </div>
    );
};


export default DrinkList;