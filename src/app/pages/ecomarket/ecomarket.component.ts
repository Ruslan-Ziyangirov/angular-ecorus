import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { DataItems } from '../../mocks/products-mock';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@services/dialog.service';
import { PartnersLoginFormComponent } from '@components/forms/partners-login-form/partners-login-form.component';
import { QrCodeComponent } from '@components/modals/qr-code/qr-code.component';

@Component({
  selector: 'app-ecomarket',
  templateUrl: './ecomarket.component.html',
  styleUrls: ['./ecomarket.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcomarketComponent {

	formGroup: FormGroup;
	@Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
	@Input() products: Array<any>;

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
		});
		this.products = DataItems

	}

	openQrCodeDialog() {
		this.dialog.openDialog(QrCodeComponent,{title: "QR-код на покупку создан"})
	}
}
