export interface CollectionCard  {
	id?: number,
	image: any,
	address: string,
	fullAddress: string
	phone: string,
	description: string,
	timetable: string[],
	shop: string,
	items: string[]
}

export const CollectionPointCardsMock: Array<CollectionCard > = [
	{
		id: 1,
		image: "/assets/images/collectionPoint-image.png",
		address: 'ул.Кремлёвская, 88',
		fullAddress: 'Казань, Кремлёвская, 88',
		phone: '+7 (917) 888 88 88',
		description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
		timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
		shop: 'H&M',
		items: ['Пластик: от 5 кг', 'Стекло: от 2 кг', 'Стекло: от 2 кг']
	},
	{
		id: 2,
		image: "/assets/images/collectionPoint-image.png",
		address: 'ул.Кремлёвская, 35',
		fullAddress: 'Казань, Кремлёвская, 35',
		phone: '+7 (917) 355 35 35',
		description: 'Стекло, бумага, металл, старая одежда, батареи',
		timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
		shop: 'H&M',
		items: ['Пластик: от 5 кг', 'Стекло: от 2 кг']
	},
	{
		id: 3,
		image: "/assets/images/collectionPoint-image.png",
		address: 'ул.Кремлёвская, 21',
		fullAddress: 'Казань, Кремлёвская, 21',
		phone: '+7 (917) 211 21 21',
		description: 'Пластик, стекло, бумага, металл',
		timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
		shop: 'H&M',
		items: ['Пластик: от 5 кг', 'Стекло: от 2 кг']
	},
]
