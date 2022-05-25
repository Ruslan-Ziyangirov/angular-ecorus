import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MockHistory } from '../mocks/history-mock';
import { CollectionPointCardsMock } from '../mocks/collectionPoint-mock';

interface CollectionCard {
	id?: number,
	image: any,
	address: string,
	fullAddress?: string
	phone?: string,
	description: string,
	timetable?: string[],
	shop?: string,
	items?: string[]
}

@Injectable({
	providedIn: 'root'
})
export class CollectionCardPointService {
	cards$: BehaviorSubject<Array<CollectionCard>> = new BehaviorSubject<Array<CollectionCard>>(CollectionPointCardsMock);

	constructor() {
	}
}
