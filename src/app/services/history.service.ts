import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MockHistory } from '../mocks/history-mock';

interface HistoryModel {
	address: string,
	material: string,
	date: string,
	price: string
}

@Injectable({
	providedIn: 'root'
})
export class HistoryService {
	history$: BehaviorSubject<Array<HistoryModel>> = new BehaviorSubject<Array<HistoryModel>>(MockHistory);

	constructor() {
	}
}
