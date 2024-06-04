export type Provision = {
	id: number;
	name: string;
	description: string;
	imageSource: string;
	category: string;
};

export type DishType = Provision & {
	cousine: string;
	price: number;
};

export type DrinkType = Provision & {
	price: number;
};

export type OrderType = {
	id: number;
	email: string;
	dish: DishType;
	drinks: DrinkType[];
	count: number;
	time: string;
	orderDate: Date;
	totalAmount: number;
};
