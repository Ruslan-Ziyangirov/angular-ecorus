import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { SigninFormComponent } from '@components/forms/signin-form/signin-form.component';
import { PartnersLoginFormComponent } from '@components/forms/partners-login-form/partners-login-form.component';
import { MenuBurgerComponent } from '@components/modals/menu-burger/menu-burger.component';
import { AuthorizationService } from '@services/authorization.service';
import { ProfileService } from '@services/profile.service';
import { takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '@models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

	user$ = new BehaviorSubject<User | null>(null);
	destroy$ = new Subject();

	constructor(private dialog: DialogService,
				private profileService: ProfileService,
				public authService: AuthorizationService,
				private route: Router) {
	}

	openLoginDialog() {
		this.dialog.openDialog(SigninFormComponent,{title: "Вход"})
	}

	openMenuBurgerDialog() {
		this.dialog.openDialog(MenuBurgerComponent,{title: "Меню"})
	}

	openProfile(){
		this.route.navigate(['/profile'])
	}

	ngOnInit() {
		if (this.authService.isAuthorized) {
			this.profileService.getProfile()
				.pipe(takeUntil(this.destroy$))
				.subscribe(
					(response: User) => {
						this.user$.next(response);
					}
				);
		}
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

}
