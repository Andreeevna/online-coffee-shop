import { IProduct } from '@/types/product.interface'

export const products: IProduct[] = [
	{
		id: 1,
		name: 'Iced Green lemonade',
		slug: 'iced-green-lemonade',
		description:
			'Tea base: Black tea is usually used, which gives the drink a deep taste and aroma.Lemonade.',
		price: 19,
		reviews: [],
		images: [
			'/images/products/ice-lemonade/ice-lemonade1.png',
			'/images/products/ice-lemonade/ice-lemonade2.png',
			'/images/products/ice-lemonade/ice-lemonade.png',
		],
	},
	// {
	// 	id: 2,
	// 	name: 'Berry frappuccino cream',
	// 	description:
	// 		'This drink is an excellent choice for those who are looking for something lighter compared to traditional coffee options, offering freshness and brightness of berry flavor.',
	// 	price: 10,
	// 	reviews: [],
	// 	images: [
	// 		'/images/products/berry-frappuccino-cream/berry-frappuccino.png',
	// 		'/images/products/berry-frappuccino-cream/berry-frappuccino.png',
	// 		'/images/products/berry-frappuccino-cream/berry-frappuccino2.png',
	// 	],
	// },
	{
		id: 3,
		name: 'Ice Сappuccino',
		slug: 'ice-cappuccino',
		description:
			'This drink is perfect for a hot summer day, offering a balanced taste of coffee with milk cream and a light texture of ice.',
		price: 11,
		reviews: [],
		images: [
			'/images/products/cappuccino/cappuccino2.png',
			'/images/products/cappuccino/cappuccino1.png',
			'/images/products/cappuccino/cappuccino.png',
		],
	},
	{
		id: 4,
		name: 'Frapuccino',
		slug: 'frapuccino',
		description:
			'This drink has become a symbol of Starbucks and attracts millions of fans around the world due to its unique taste and texture.',
		price: 8,
		reviews: [],
		images: [
			'/images/products/frapuccino/frapuccino.png',
			'/images/products/frapuccino/frapuccino1.png',
			'/images/products/frapuccino/frapuccino2.png',
		],
	},
	{
		id: 5,
		name: 'latte cream',
		slug: 'latte-cream',
		description:
			'This drink has become a symbol of Starbucks and attracts millions of fans around the world due to its unique taste and texture.',
		price: 9,
		reviews: [],
		images: [
			'/images/products/sfrappuccino.png',
			'/images/products/sfrappuccino1.png',
			'/images/products/sfrappuccino2.png',
		],
	},
]
