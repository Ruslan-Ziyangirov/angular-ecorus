import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@services/dialog.service';
import { SignupFormComponent } from '@components/forms/signup-form/signup-form.component';
import { SigninWithSmsFormComponent } from '@components/forms/signin-with-sms-form/signin-with-sms-form.component';

@Component({
  selector: 'app-partners-login-form',
  templateUrl: './partners-login-form.component.html',
  styleUrls: ['./partners-login-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersLoginFormComponent{

	formGroup: FormGroup;
	@Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder
	) {
		this.formGroup = this.formBuilder.group({
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

	getControl(name: string) {
		return this.formGroup.get(name)!;
	}

	openLoginWithSMSDialog() {
		this.dialog.openDialog(SigninWithSmsFormComponent,{title: "Вход или регистрация"})
	}


	openSignUpDialog() {
		this.dialog.openDialog(SignupFormComponent,{title: "Регистрация"})
	}

	onSubmit(phone: string, password: string){
		return ()=>{
			console.log(phone,password)
		}
	}

}
