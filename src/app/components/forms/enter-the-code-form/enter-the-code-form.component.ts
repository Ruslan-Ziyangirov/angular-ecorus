import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@services/dialog.service';
import { SigninFormComponent } from '@components/forms/signin-form/signin-form.component';
import { PartnersLoginFormComponent } from '@components/forms/partners-login-form/partners-login-form.component';

@Component({
  selector: 'app-enter-the-code-form',
  templateUrl: './enter-the-code-form.component.html',
  styleUrls: ['./enter-the-code-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterTheCodeFormComponent {

	isSubmitted: boolean = false;
	formGroup: FormGroup;
	@Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder
	) {
		this.formGroup = this.formBuilder.group({
			code: ['', [
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

	openLoginForPartnersDialog() {
		this.dialog.openDialog(PartnersLoginFormComponent,{title: "Вход"})
	}

}
