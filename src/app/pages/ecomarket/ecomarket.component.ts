import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { DataItems } from '../../mocks/products-mock';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@services/dialog.service';
import { PartnersLoginFormComponent } from '@components/forms/partners-login-form/partners-login-form.component';
import { QrCodeComponent } from '@components/modals/qr-code/qr-code.component';
import { FiltersBottomSheetComponent } from '@components/bottom-sheets/filters-bottom-sheet/filters-bottom-sheet.component';
import { BottomSheetService } from '@services/bottom-sheet.service';

@Component({
  selector: 'app-ecomarket',
  templateUrl: './ecomarket.component.html',
  styleUrls: ['./ecomarket.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcomarketComponent {

	@Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
	@Input() products: Array<any>;

	constructor(
		public dialog: DialogService,
		private bottomSheetService: BottomSheetService
	) {

		this.products = DataItems

	}

	openQrCodeDialog() {
		this.dialog.openDialog(QrCodeComponent,{title: "QR-код на покупку создан"})
	}

	openBottomSheetFilters() {
		this.bottomSheetService.openDialog(FiltersBottomSheetComponent)
	}


}
