"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { OrderType, DishType, DrinkType } from "../api/types";


interface Props {
    item: OrderType | DishType | DrinkType;
    click?: () => void;
}
const OrderItem: React.FC<Props> = ({ item, click }) => {

    const renderCardContent = () => {
        if ('dish' in item) {
            return (
                <>
                    <h1 className="cardTitle">{item.dish.name}</h1>
                    <p className="cardDescription">{item.dish.description}</p>
                    <img src={item.dish.imageSource} alt={item.dish.name} className="cardImage" />
                </>
            );
        } else if ('cousine' in item) {
            return (
                <>
                    <h1 className="cardTitle">{item.name} - {item.cousine}</h1>
                    <p className="cardDescription">{item.description}</p>
                    <img src={item.imageSource} alt={item.name} className="cardImage" />
                </>
            );
        } else {
            return (
                <>
                    <div onClick={click}>
                        <h1 className="cardTitle">{item.name}</h1>
                        <p className="cardDescription">{item.description}</p>
                        <img src={item.imageSource} alt={item.name} className="cardImage" />
                    </div>
                </>
            );
        }
    };

    return (
        <div className="card">
            {renderCardContent()}
        </div>
    );
}

export default OrderItem;