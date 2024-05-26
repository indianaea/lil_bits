import { Meal, MealObject, OrderType } from "./types"

export const getOrders = async (): Promise<MealObject> => {
	const res = await fetch("https://themealdb.com/api/json/v1/1/random.php");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const response = await res.json();
	console.log("getting expenses", response);
	return response;
};


const postOrder = async (order: OrderType): Promise<void> => {
    const res = await fetch(`http://localhost:3000/api/orders/${order}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  
    if (!res.ok) {
      throw new Error('Failed to post order')
    }
  
    const response = await res.json()
    console.log(response)
    return response
  }


export const orderApi = {
	getOrders,
	postOrder
};
