import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthorizationService } from '@services/authorization.service';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

	constructor(private authService: AuthorizationService) {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		return this.authService.isAuthorized;
	}
}
