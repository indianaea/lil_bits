import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Order, Dish } from "./types";

let nextId = 2;
let orders: Order[] = [
  {
    id: 1,
    drinks: [
      {
        brewer: "vifilfell",
        category: "beer",
        description: "tasty beer",
        id: "some-uuid",
        imageSource:
          "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
        name: "Gylltur",
        price: 2500,
      },
    ],
    email: "gunnsteinnskula@gmail.com",
    count: 10,
    date: new Date(),
    dish: {
      id: "53051",
      category: "seafood",
      cousine: "Malaysian",
      description: "White fish in creamy sauce",
      imageSource: "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
      name: "Nasi lemak",
      price: 2500,
      },
  },
];

let menu: Dish[] = [
  {
    id: "1",
    category: "seafood",
    cousine: "Malaysian",
    description: "White fish in creamy sauce",
    imageSource: "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
    name: "Nasi lemak",
    price: 2500,
  },
  {
    id: "2",
    category: "seafood",
    cousine: "Japanese",
    description: "Fresh sushi rolls",
    imageSource: "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
    name: "Sushi",
    price: 1800,
  },
  {
    id: "3",
    category: "meat",
    cousine: "Italian",
    description: "Classic spaghetti with meatballs",
    imageSource: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    name: "Spaghetti Bolognese",
    price: 2000,
  },
  {
    id: "4",
    category: "vegetarian",
    cousine: "Indian",
    description: "Spiced chickpeas in a rich tomato sauce",
    imageSource: "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg",
    name: "Chana Masala",
    price: 1500,
  },
  {
    id: "5",
    category: "seafood",
    cousine: "Spanish",
    description: "A traditional Spanish seafood dish with rice",
    imageSource: "https://www.themealdb.com/images/media/meals/vwwspt1487394060.jpg",
    name: "Paella",
    price: 3000,
  },
  {
    id: "6",
    category: "meat",
    cousine: "American",
    description: "Grilled steak with garlic butter",
    imageSource: "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
    name: "Grilled Steak",
    price: 3500,
  },
  {
    id: "7",
    category: "vegetarian",
    cousine: "Greek",
    description: "A fresh salad with tomatoes, cucumbers, and feta cheese",
    imageSource: "https://www.themealdb.com/images/media/meals/urtwux1486983078.jpg",
    name: "Greek Salad",
    price: 1200,
  },
  {
    id: "8",
    category: "dessert",
    cousine: "French",
    description: "A classic French dessert with caramelized sugar",
    imageSource: "https://www.themealdb.com/images/media/meals/ryspuw1468923356.jpg",
    name: "Crème Brûlée",
    price: 900,
  },
  {
    id: "9",
    category: "seafood",
    cousine: "Thai",
    description: "Spicy shrimp soup with lemongrass and coconut milk",
    imageSource: "https://www.themealdb.com/images/media/meals/1529445367.jpg",
    name: "Tom Yum Goong",
    price: 2200,
  },
  {
    id: "10",
    category: "meat",
    cousine: "Mexican",
    description: "Tacos with beef, cheese, and fresh salsa",
    imageSource: "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg",
    name: "Tacos",
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
  const index = Math.floor(Math.random() * 7);
  return res.json(menu[index]);
});

const isOrder = (body: Order | Record<string, unknown>): body is Order => {
  if (
    "name" in body &&
    typeof body.name === "string" &&
    "email" in body &&
    typeof body.email === "string" &&
    "dish" in body &&
    typeof body.dish === "object"
  ) {
    return true;
  }
  return false;
};

api.post("/api/create-order", (req: Request<Order>, res) => {
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

  const order: Order = {
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

api.put("/api/update-order", (req: Request<Order>, res) => {
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
  orders.map((o) => {
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