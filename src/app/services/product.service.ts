import { BehaviorSubject } from 'rxjs';
import { MockHistory } from '../mocks/history-mock';
import { Injectable } from '@angular/core';
import { MockProducts } from '../mocks/products-mock';

interface ProductModel {
	id: number,
	brand: string,
	img: string,
	title: string,
	gender: string,
	price: string
}


@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	products$ :BehaviorSubject<Array<ProductModel>> = new BehaviorSubject<Array<ProductModel>>(MockProducts);

	constructor() {
	}
}
