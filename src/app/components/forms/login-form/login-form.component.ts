import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@services/dialog.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

	formGroup: FormGroup;

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder
	) {
		this.formGroup = this.formBuilder.group({
			phone: ['', [
				Validators.required,
				Validators.maxLength(11)]],
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

	onSubmit(phone: string, password: string){
		return ()=>{
			console.log(phone,password)
		}
	}


}