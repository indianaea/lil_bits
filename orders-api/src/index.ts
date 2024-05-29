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
			description:
				"In a medium saucepan over medium heat, stir together coconut milk, water, ground ginger, ginger root, salt, bay leaf, and rice. Cover, and bring to a boil. Reduce heat, and simmer for 20 to 30 minutes, or until done.\r\n\r\n Step 2\r\nPlace eggs in a saucepan, and cover with cold water. Bring water to a boil, and immediately remove from heat. Cover, and let eggs stand in hot water for 10 to 12 minutes. Remove eggs from hot water, cool, peel and slice in half. Slice cucumber.\r\n\r\n Step 3\r\nMeanwhile, in a large skillet or wok, heat 1 cup vegetable oil over medium-high heat. Stir in peanuts and cook briefly, until lightly browned. Remove peanuts with a slotted spoon and place on paper towels to soak up excess grease. Return skillet to stove. Stir in the contents of one package anchovies; cook briefly, turning, until crisp. Remove with a slotted spoon and place on paper towels. Discard oil. Wipe out skillet.\r\n\r\n Step 4\r\nHeat 2 tablespoons oil in the skillet. Stir in the onion, garlic, and shallots; cook until fragrant, about 1 or 2 minutes. Mix in the chile paste, and cook for 10 minutes, stirring occasionally. If the chile paste is too dry, add a small amount of water. Stir in remaining anchovies; cook for 5 minutes. Stir in salt, sugar, and tamarind juice; simmer until sauce is thick, about 5 minutes.\r\n\r\n Step 5\r\nServe the onion and garlic sauce over the warm rice, and top with peanuts, fried anchovies, cucumbers, and eggs.",
			imageSource:
				"https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
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
        description: "In a medium saucepan over medium heat, stir together coconut milk, water, ground ginger, ginger root, salt, bay leaf, and rice. Cover, and bring to a boil. Reduce heat, and simmer for 20 to 30 minutes, or until done.\r\n\r\n Step 2\r\nPlace eggs in a saucepan, and cover with cold water. Bring water to a boil, and immediately remove from heat. Cover, and let eggs stand in hot water for 10 to 12 minutes. Remove eggs from hot water, cool, peel and slice in half. Slice cucumber.\r\n\r\n Step 3\r\nMeanwhile, in a large skillet or wok, heat 1 cup vegetable oil over medium-high heat. Stir in peanuts and cook briefly, until lightly browned. Remove peanuts with a slotted spoon and place on paper towels to soak up excess grease. Return skillet to stove. Stir in the contents of one package anchovies; cook briefly, turning, until crisp. Remove with a slotted spoon and place on paper towels. Discard oil. Wipe out skillet.\r\n\r\n Step 4\r\nHeat 2 tablespoons oil in the skillet. Stir in the onion, garlic, and shallots; cook until fragrant, about 1 or 2 minutes. Mix in the chile paste, and cook for 10 minutes, stirring occasionally. If the chile paste is too dry, add a small amount of water. Stir in remaining anchovies; cook for 5 minutes. Stir in salt, sugar, and tamarind juice; simmer until sauce is thick, about 5 minutes.\r\n\r\n Step 5\r\nServe the onion and garlic sauce over the warm rice, and top with peanuts, fried anchovies, cucumbers, and eggs.",
        imageSource: "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
        name: "Nasi lemak",
        price: 2500,
    },
    {
        id: "2",
        category: "vegetarian",
        cousine: "Indian",
        description: "A rich, creamy blend of spinach and spices, cooked with paneer cheese. Sauté onions, garlic, and ginger in oil until tender. Add spinach and cook until wilted. Puree mixture, then return to pan and add spices and paneer. Simmer until flavors meld.",
        imageSource: "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
        name: "Palak Paneer",
        price: 2000,
    },
    {
        id: "3",
        category: "meat",
        cousine: "Mexican",
        description: "Marinated pork, slow-cooked with spices and served with tortillas, pineapple, and salsa. Season pork with a blend of chili powder, cumin, and pineapple juice. Cook in a slow cooker until tender, then shred and serve with fresh toppings.",
        imageSource: "https://www.themealdb.com/images/media/meals/vsrupw1511460963.jpg",
        name: "Tacos al Pastor",
        price: 3000,
    },
    {
        id: "4",
        category: "seafood",
        cousine: "Japanese",
        description: "A traditional Japanese dish featuring fresh fish and seafood over vinegared rice. Top sushi rice with slices of fresh tuna, salmon, and shrimp. Serve with soy sauce, wasabi, and pickled ginger.",
        imageSource: "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
        name: "Sushi",
        price: 3500,
    },
    {
        id: "5",
        category: "meat",
        cousine: "American",
        description: "A juicy, grilled beef patty topped with cheddar cheese, lettuce, tomato, and pickles, served on a toasted bun. Grill beef patty to desired doneness, add cheese, and assemble with fresh vegetables on a bun.",
        imageSource: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
        name: "Cheeseburger",
        price: 1800,
    },
    {
        id: "6",
        category: "dessert",
        cousine: "French",
        description: "A light, flaky pastry filled with rich vanilla custard and topped with a glossy caramel glaze. Prepare choux pastry, bake until golden, then fill with custard and drizzle with caramel.",
        imageSource: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
        name: "Éclair",
        price: 1200,
    },
    {
        id: "7",
        category: "vegetarian",
        cousine: "Italian",
        description: "A classic Italian pasta dish made with fresh tomatoes, basil, garlic, and olive oil. Cook pasta al dente, then toss with a sauce of sautéed tomatoes, garlic, and fresh basil. Top with grated Parmesan cheese.",
        imageSource: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
        name: "Spaghetti al Pomodoro",
        price: 2200,
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

api.get("/api/menu:id", (req, res) => {
	const id = parseInt(req.params.id)
	console.log("Getting menu:", menu[id]);
	return res.json(menu[id]);
})

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
