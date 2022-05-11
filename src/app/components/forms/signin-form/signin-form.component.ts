import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@services/dialog.service';
import { PartnersLoginFormComponent } from '@components/forms/partners-login-form/partners-login-form.component';
import { SignupFormComponent } from '@components/forms/signup-form/signup-form.component';
import { SigninWithSmsFormComponent } from '@components/forms/signin-with-sms-form/signin-with-sms-form.component';
import { ToastService } from '@services/toast.service';
import { AuthorizationService } from '@services/authorization.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninFormComponent {

	formGroup: FormGroup;

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder,
		private toast: ToastService,
		private authService: AuthorizationService

	) {
		this.formGroup = this.formBuilder.group({
			login: ['', [
				Validators.required,
				Validators.maxLength(11)]],
			password: ['', [Validators.required,
				Validators.maxLength(16)]]
		})
	}

	isControlValid(name: string) {
		let control = this.formGroup.get(name);
		return (control?.touched || control?.dirty) && control?.errors;
	}

	validateControl(name: string, validateField: string) {
		let control = this.formGroup.get(name);
		return (control?.touched || control?.dirty) && control?.hasError(validateField);
	}

	openLoginForPartnersDialog() {
		this.dialog.openDialog(PartnersLoginFormComponent,{title: "Вход"})
	}

	openLoginWithSMSDialog() {
		this.dialog.openDialog(SigninWithSmsFormComponent,{title: "Вход или регистрация"})
	}

	openSignUpDialog() {
		this.dialog.openDialog(SignupFormComponent,{title: "Регистрация"})
	}

	login() {
		const login = this.formGroup.value.login;
		const password = this.formGroup.value.password;
		return () => {
			this.authService.authorization({login, password}).subscribe(res => {
				this.authService.token = res.token;
				console.log(this.authService.token);
				console.log(res);
			}, err => {
				console.log(err);
			})
		}
	}


}
