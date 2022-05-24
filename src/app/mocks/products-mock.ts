interface ProductModel {
	id: number,
	brand: string,
	img: string,
	title: string,
	gender: string,
	price: string
}

export const MockProducts: Array<ProductModel> = [
	{
		id: 1,
		brand: 'NIKE',
		img: '/assets/images/nikeairmax2021.png',
		title: 'Nike Air Max 2022',
		gender: 'Мужская обувь',
		price: '1000'
	},
	{
		id: 2,
		brand: 'NIKE',
		img: '/assets/images/nike air forxe.png',
		title: 'Nike Air Max 90 Premium',
		gender: 'Мужская обувь',
		price: '750'
	},
	{
		id: 3,
		brand: 'Adidas',
		img: '/assets/images/hoddie.png',
		title: 'Adidas Alphabounce RC',
		gender: 'Мужская обувь',
		price: '1200'
	},
	{
		id: 4,
		brand: 'H&M',
		img: '/assets/images/adidas.png',
		title: 'Nike Air Max 2021',
		gender: 'Мужское худи',
		price: '1000'
	}
]

