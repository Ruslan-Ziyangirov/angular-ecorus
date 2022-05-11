import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
	providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

	constructor(
		private toast: ToastService
	) {
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			catchError((err: HttpErrorResponse) => {
				if (err.error.message) {
					this.toast.error(err.error.message);
				}

				return throwError(err);
			}),
		);
	}
}
