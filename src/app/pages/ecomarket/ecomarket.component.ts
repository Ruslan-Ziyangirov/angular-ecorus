import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	TemplateRef,
	ViewChild
} from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { QrCodeComponent } from '@components/modals/qr-code/qr-code.component';
import { BottomSheetService } from '@services/bottom-sheet.service';
import { ProductsService } from '@services/product.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-ecomarket',
  templateUrl: './ecomarket.component.html',
  styleUrls: ['./ecomarket.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcomarketComponent implements OnInit{
	@ViewChild('templateBottomSheet') TemplateBottomSheet?: TemplateRef<any>;
	@Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
	products = this.productsService.products$;

	loaded = true;

	constructor(
		public dialog: DialogService,
		private bottomSheetService: BottomSheetService,
		private productsService: ProductsService,
		private bottomSheet: MatBottomSheet
	) {

	}

	ngOnInit(){
		setTimeout(()=>{
			this.loaded=false;
		}, 2000)
	}


	openTemplateSheetMenu() {
		// @ts-ignore
		this.bottomSheet.open(this.TemplateBottomSheet);
	}

	closeTemplateSheetMenu() {
		this.bottomSheet.dismiss();
	}

	openQrCodeDialog() {
		this.dialog.openDialog(QrCodeComponent,{title: "QR-код на покупку создан"})
	}



}
