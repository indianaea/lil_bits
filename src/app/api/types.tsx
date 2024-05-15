export type Provision = {
	id: string;
	name: string;
	description: string;
	imageSource: string;
	category: string;
};

export type Dish = Provision & {
	cousine: string;
	price: number;
};

export type Drink = Provision & {
	price: number;
};

export type OrderType = {
	id: number;
	email: string;
	dish: Dish;
	drinks: Drink[];
	count: number;
	date: Date;
};
