import { Injectable } from '@angular/core';
import { AuthorizationService } from '@services/authorization.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastService } from '@services/toast.service';
import { Observable } from 'rxjs';
import { StartsWithHttp } from '@services/url-interceptor.service';

@Injectable({
	providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
	constructor(private auth: AuthorizationService, private router: Router, private toast: ToastService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(this.addToken(request));
	}

	addToken(request: HttpRequest<any>): HttpRequest<any> {
		const headers =
			this.auth?.token && !request.context.get(StartsWithHttp)
				? request.headers.set('Authorization', `Bearer ${this.auth.token}`)
				: request.headers;

		return request.clone({
			headers,
		});
	}
}
