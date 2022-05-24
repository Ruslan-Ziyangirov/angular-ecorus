interface HistoryModel {
	address: string,
	material: string,
	date: string,
	price: string
}

export const MockHistory: Array<HistoryModel> = [
	{
		address: 'Казань, Кремлёвская, 88',
		material: 'Пластик: 1 кг',
		date: '25.09.2021',
		price: '1000'
	},
	{
		address: 'Казань, проспект Победы, 141',
		material: 'Стекло: 3 кг',
		date: '13.05.2021',
		price: '900'
	}
]
