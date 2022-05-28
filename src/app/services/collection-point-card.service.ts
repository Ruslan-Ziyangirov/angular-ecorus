import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MockHistory } from '../mocks/history-mock';
import { CollectionPointCardsMock } from '../mocks/collectionPoint-mock';
import { CollectionPoint } from '@models/collection-point';



@Injectable({
	providedIn: 'root'
})
export class CollectionCardPointService {
	cards$: BehaviorSubject<Array<CollectionPoint>> = new BehaviorSubject<Array<CollectionPoint>>(CollectionPointCardsMock);

	constructor() {
	}
}
