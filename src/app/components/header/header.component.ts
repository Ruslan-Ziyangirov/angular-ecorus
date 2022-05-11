import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { SigninFormComponent } from '@components/forms/signin-form/signin-form.component';
import { PartnersLoginFormComponent } from '@components/forms/partners-login-form/partners-login-form.component';
import { MenuBurgerComponent } from '@components/modals/menu-burger/menu-burger.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

	constructor(private dialog: DialogService) {
	}

	openLoginDialog() {
		this.dialog.openDialog(SigninFormComponent,{title: "Вход"})
	}

	openMenuBurgerDialog() {
		this.dialog.openDialog(MenuBurgerComponent,{title: "Меню"})
	}

}
