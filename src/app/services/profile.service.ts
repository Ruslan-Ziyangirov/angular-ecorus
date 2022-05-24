import { HttpClient } from '@angular/common/http';
import { PromoCard } from '@models/promocard';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {

	constructor(private http: HttpClient) {
	}

	getProfile(): Observable<any> {
		return this.http.get('profile');
	}

	getUserBalance(): Observable<number>{
		return this.http.get<number>('profile/balance');
	}

	getUserPromoCards(): Observable<PromoCard[]>{
		return this.http.get<PromoCard[]>('promo-codes/eco-rus/api/v1/promo-codes');
	}
}
