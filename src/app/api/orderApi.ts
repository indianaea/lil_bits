import { OrderType, DishType } from "./types"

const getOrders = async (): Promise<OrderType[]> => {
  const res = await fetch("http://localhost:3001/api/orders");

  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }

  const orderList: OrderType[] = await res.json();
  console.log("getting expenses", orderList);
  return orderList;
};

const getRandomDish = async (): Promise<DishType> => {

  const res = await fetch("http://localhost:3001/api/menu");

  if (!res.ok) {
    throw new Error("Failed to fetch random dish");
  }

  const menuList: DishType = await res.json();
  console.log("getting menu", menuList);
  return menuList;
}

const getOrder = async (email: string): Promise<OrderType> => {

  const res = await fetch("http://localhost:3001/api/order/" + email);

  if (!res.ok) {
    throw new Error("Failed to fetch order");
  }

  const order: OrderType = await res.json();
  console.log("getting order", order);
  return order;
}


const postOrder = async (order: OrderType): Promise<OrderType> => {
  const res = await fetch(`http://localhost:3001/api/create-order`, {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    throw new Error('Failed to post order')
  }

  const response = await res.json() as OrderType
  return response
}

const updateOrder = async (order: OrderType): Promise<OrderType> => {
  const res = await fetch(`http://localhost:3001/api/update-order`, {
    method: 'PUT',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    throw new Error('Failed to update order')
  }

  const response = await res.json() as OrderType
  return response
}

export const orderApi = {
  getOrders,
  getOrder,
  postOrder,
  getRandomDish, 
  updateOrder
};