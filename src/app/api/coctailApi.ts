import { DrinkType } from "./types"

const getDrinks = async (): Promise<DrinkType[]> => {
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c");

    if (!res.ok) {
        console.error('Error status:', res.status, res.statusText);
        throw new Error("Failed to fetch data");
    }

    const response = await res.json();
    console.log("Getting drinks", response);

    const drinkList: DrinkType[] = response.drinks.map((drink: any) => ({
        id: Number(drink.idDrink),
        name: drink.strDrink,
        description: drink.strInstructions,
        imageSource: drink.strDrinkThumb,
        price: 1000,
        category: drink.strCategory,
        brewer: drink.strIngredient1
    }));	

	return drinkList;
};

export const coctailApi = {
	getDrinks
};
