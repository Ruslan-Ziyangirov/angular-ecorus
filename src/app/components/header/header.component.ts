import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { LoginFormComponent } from '@components/forms/login-form/login-form.component';

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
		this.dialog.openDialog(LoginFormComponent,{title: "Вход"})
	}

}
