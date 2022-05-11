import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '@utils/local-storage';
import { Observable } from 'rxjs';

interface AuthParams{
	login: string;
	password: string;
}

interface SignUpParams {
	email: string;
	phone_number: string;
	password: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthorizationService {
	@LocalStorage() user?: any | null;
	@LocalStorage() token?: string | null;

	constructor(private http: HttpClient) {
	}

	authorization(credentials: AuthParams): Observable<any>{
		return this.http.post('login', credentials);
	}

	registration(signUpParams: SignUpParams): Observable<any> {
		return this.http.post('account', signUpParams);
	}
}
