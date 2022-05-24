import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { User } from '@models/user';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProfileService } from '@services/profile.service';
import { AuthorizationService } from '@services/authorization.service';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuBurgerComponent implements OnInit {

	user$ = new BehaviorSubject<User | null>(null);
	destroy$ = new Subject();

  	constructor(public dialog: DialogService,
				private route: Router,
				private profileService: ProfileService,
				public authService: AuthorizationService,) { }

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
