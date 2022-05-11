import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@services/dialog.service';
import { PartnersLoginFormComponent } from '@components/forms/partners-login-form/partners-login-form.component';
import { SigninFormComponent } from '@components/forms/signin-form/signin-form.component';
import { AuthorizationService } from '@services/authorization.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupFormComponent{

	formGroup: FormGroup;

	@Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder,
		private authService: AuthorizationService
	) {
		this.formGroup = this.formBuilder.group({
			firstname:['',Validators.required,
				Validators.maxLength(64)],
			phone_number: ['', [
				Validators.required,
				Validators.maxLength(11)
			]],
			email: ['', [
				Validators.required,
				Validators.maxLength(64),
				Validators.email]],
			password: ['', [Validators.required,
				Validators.maxLength(16)]]
		})
	}


	validateControl(name: string, validateField: string) {
		let control = this.formGroup.get(name);
		return (control?.touched || control?.dirty) && control?.hasError(validateField);
	}

	isControlValid(name: string) {
		let control = this.formGroup.get(name);
		return (control?.touched || control?.dirty) && control?.errors;
	}

	openLoginDialog() {
		this.dialog.openDialog(SigninFormComponent,{title: "Вход"})
	}

	openLoginForPartnersDialog() {
		this.dialog.openDialog(PartnersLoginFormComponent,{title: "Вход"})
	}

	signUp() {
		return () => {
			this.authService.registration(this.formGroup.value).subscribe(res => {
				console.log(res);
				this.dialog.openDialog(SigninFormComponent, {title:"Вход"});
			}, err => {
				console.log(err);
			})
		}
	}

}
