import { DrinkType } from "./types"

const getDrinks = async (): Promise<DrinkType[]> => {
	const res = await fetch("www.thecocktaildb.com/api/json/v1/1/search.php?f=a");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const response = await res.json();
	console.log("Getting drinks", response);

    const drinkList: DrinkType[] = response.drinks.map((drink: any) => ({
        id: drink.idDrink,
        name: drink.strDrink,
        description: drink.strInstructions,
        imageSource: drink.strDrinkThumb,
        price: 1000,
        category: drink.strCategory,
        brewer: "NTV"
    }));	

	return drinkList;
};

export const coctailApi = {
	getDrinks
};
