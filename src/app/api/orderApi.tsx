import { OrderType, Dish } from "./types"

const getOrders = async (): Promise<OrderType[]> => {
	const res = await fetch("http://localhost:3001/api/orders");

	if (!res.ok) {
		throw new Error("Failed to fetch orders");
	}

  const orderList: OrderType[] = await res.json();
	console.log("getting expenses", orderList);
	return orderList;
};

const getRandomDish = async (): Promise<Dish> => {
  const id = Math.floor(Math.random() * 6) + 1;

  const res = await fetch("http://localhost:3001/api/menu?id=" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch random dish");
  }

  const menuList: Dish = await res.json();
  console.log("getting menu", menuList);
  return menuList;
}


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
