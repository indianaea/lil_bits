import { OrderType } from "./types"

const getOrders = async (): Promise<OrderType[]> => {
	const res = await fetch("http://localhost:3001/api/orders");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

  const orderList: OrderType[] = await res.json();
	console.log("getting expenses", orderList);
	return orderList;
};


const postOrder = async (order: OrderType): Promise<void> => {
    const res = await fetch(`http://localhost:3001/api/orders/${order}`, {
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
