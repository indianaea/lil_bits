import { Drink } from "./types"

const getDrinks = async (): Promise<Drink[]> => {
	const res = await fetch("www.thecocktaildb.com/api/json/v1/1/search.php?f=a");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const response = await res.json();
	console.log("Getting drinks", response);

	return response;
};

//function convertToDrink(res: Object) {
//   return Drink(
//        id = res.idDrink,
//        name = res.strDrink,
//        description = res.strInstructions,
//        imageSource = res.strDrinkThumb,
//        price = 1000,
//        category = res.strCategory,
//        brewer = ""
//    );
//  }

export const GetDrinks = {
	getDrinks,
};

