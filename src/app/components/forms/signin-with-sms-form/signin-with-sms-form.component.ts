import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { SigninFormComponent } from '@components/forms/signin-form/signin-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@services/dialog.service';
import { PartnersLoginFormComponent } from '@components/forms/partners-login-form/partners-login-form.component';
import { EnterTheCodeFormComponent } from '@components/forms/enter-the-code-form/enter-the-code-form.component';
import { ToastService } from '@services/toast.service';
import { AuthorizationService } from '@services/authorization.service';

@Component({
  selector: 'app-login-with-sms-form',
  templateUrl: './signin-with-sms-form.component.html',
  styleUrls: ['./signin-with-sms-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninWithSmsFormComponent {

	formGroup: FormGroup;
	@Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder,
	) {
		this.formGroup = this.formBuilder.group({
			phone: ['', [
				Validators.required,
				Validators.maxLength(11)]]
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

	onSubmit(phone: string, password: string){
		return ()=>{
			console.log(phone,password)
		}
	}

	openLoginDialog() {
		this.dialog.openDialog(SigninFormComponent,{title: "Вход"})
	}

	openEnterTheCodeDialog() {
		this.dialog.openDialog(EnterTheCodeFormComponent,{title: "Ввести код"})
	}

	openLoginForPartnersDialog() {
		this.dialog.openDialog(PartnersLoginFormComponent,{title: "Вход"})
	}


}
