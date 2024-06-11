import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { OrderType, DishType } from "./types";

let nextId = 1;
let orders: OrderType[] = [];

let menu: DishType[] = [
  {
    id: 1,
    category: "vegetarian",
    cousine: "American",
    description: "Chicken & halloumi burgers with cheese",
    imageSource: "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg",
    name: "Halloumi Burger",
    price: 2500,
  },
  {
    id: 2,
    category: "seafood",
    cousine: "Japanese",
    description: "Fresh sushi rolls with avacado and fish eggs",
    imageSource: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
    name: "Sushi",
    price: 1800,
  },
  {
    id: 3,
    category: "meat",
    cousine: "Italian",
    description: "Classic spaghetti with meatballs and an italian sauce",
    imageSource: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    name: "Spaghetti Bolognese",
    price: 2000,
  },
  {
    id: 4,
    category: "vegetarian",
    cousine: "Indian",
    description: "Spiced chickpeas in a rich spicy tomato sauce",
    imageSource: "https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg",
    name: "Spiced chickpeas",
    price: 1500,
  },
  {
    id: 5,
    category: "seafood",
    cousine: "Spanish",
    description: "A traditional Spanish seafood dish with rice",
    imageSource: "https://www.themealdb.com/images/media/meals/1520081754.jpg",
    name: "Paella",
    price: 3000,
  },
  {
    id: 6,
    category: "meat",
    cousine: "American",
    description: "Grilled steak with garlic butter and more",
    imageSource: "https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg",
    name: "Grilled Steak",
    price: 3500,
  },
  {
    id: 7,
    category: "vegetarian",
    cousine: "Greek",
    description: "A fresh salad with tomatoes, cucumbers, and feta cheese",
    imageSource: "https://www.themealdb.com/images/media/meals/urtwux1486983078.jpg",
    name: "Greek Salad",
    price: 1200,
  },
  {
    id: 8,
    category: "vegetarian",
    cousine: "American",
    description: "A classic American grilled Mac and Cheese sandwich",
    imageSource: "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg",
    name: "Cheese Sandwich",
    price: 900,
  },
  {
    id: 9,
    category: "seafood",
    cousine: "Thai",
    description: "Baked salmon with fennel and tomatoes",
    imageSource: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    name: "Baked Salmon",
    price: 2200,
  },
  {
    id: 10,
    category: "desert",
    cousine: "American",
    description: "Delicious salted Caramel cheescake you wont forget",
    imageSource: "https://www.themealdb.com/images/media/meals/xqrwyr1511133646.jpg",
    name: "Cheescake",
    price: 1700,
  },
];

const api: Express = express();
api.use(cors());
api.use(express.json());
api.use(bodyParser.urlencoded({ extended: false }));
const port = 3001;

api.get("/api/orders", (_, res) => {
  console.log("Getting orders:", orders);

  return res.json(orders);
});

api.get("/api/menu", (req, res) => {
  const index = Math.floor(Math.random() * 10);
  return res.json(menu[index]);
});

const isOrder = (body: any): body is OrderType => {
  if (
    typeof body === "object" &&
    "id" in body && typeof body.id === "number" &&
    "email" in body && typeof body.email === "string" &&
    "totalAmount" in body && typeof body.totalAmount === "number"
  ) {
    return true;
  }
  return false;
};

api.post("/api/create-order", (req: Request<OrderType>, res) => {
  const emailAlreadyTaken = () => {
    if (!req.body.email) {
      return false;
    }
    // Returns true if email exists, and the index is 0 or higher. Returns false if it cannot find the item, resulting in -1
    return orders.findIndex((order) => order.email === req.body.email) >= 0;
  };

  if (!isOrder(req.body)) {
    res.json({
      success: false,
      error: "Must supply all properties of an order",
    });
    return;
  }

  if (emailAlreadyTaken()) {
    res.json({
      success: false,
      error: "Email already reserved",
    });
    return;
  }

  const order: OrderType = {
    ...req.body,
    id: nextId,
  };
  
  orders.push(order);
  nextId += 1;

  return res.json({
    success: true,
    order,
  });
});

api.put("/api/update-order", (req: Request<OrderType>, res) => {
  const emailDoesNotExist = () => {
    if (!req.body.email) {
      return false;
    }
    // Returns true if email does not exist, and the index is lower than 0, resulting in -1
    return orders.findIndex((order) => order.email === req.body.email) < 0;
  };

  if (!isOrder(req.body)) {
    res.json({
      success: false,
      error: "Must supply all properties of an order",
    });
    return;
  }

  if (emailDoesNotExist()) {
    res.json({
      success: false,
      error: "Email does not exist, cannot update",
    });
    return;
  }

  // Map over each item, if the item has the same email as the email in the body, update the order with the new order changes
  orders = orders.map((o) => {
    if (o.email === req.body.email) {
      return req.body;
    }
    return o;
  });

  return res.json({
    success: true,
    order: req.body,
  });
});

api.get("/api/order/:email", (req, res) => {
  const order = orders.find((order) => order.email === req.params.email);
  if (order) {
    return res.json(order);
  }

  res.json({
    success: false,
    error: `Could not find order with email: ${req.params.email}`,
  });
});

api.delete("/api/order/:id", (req, res) => {
  const orderId = parseInt(req.params.id, 10);
  const order = orders.find((e) => e.id === orderId);
  if (order) {
    orders = orders.filter((e) => e.id !== orderId);
    res.json({
      success: true,
      deletedorder: order,
    });
  } else {
    res.json({
      success: false,
      error: `Could not find order with id=${orderId}`,
    });
  }
});

api.delete("/api/order/:email", (req, res) => {
  const paramEmail = req.params.email;
  const order = orders.find((e) => e.email === paramEmail);
  if (order) {
    orders = orders.filter((e) => e.email !== paramEmail);
    res.json({
      success: true,
      deletedorder: order,
    });
  } else {
    res.json({
      success: false,
      error: `Could not find order with id=${paramEmail}`,
    });
  }
});

api.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});