import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogService } from '@services/dialog.service';
import { QrCodeComponent } from '@components/modals/qr-code/qr-code.component';
import { ProfileService } from '@services/profile.service';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoCardComponent  {

	@Input() getting_date_time: string = '2022-05-12T12:30:49.702Z';
	@Input() item_url: string = 'adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu...';
	@Input() price: number = 1000;

	// promocard: any;

	constructor(
		private sanitizer: DomSanitizer,
		private dialog: DialogService,
		private profile: ProfileService
	) {
		sanitizer.bypassSecurityTrustHtml(this.item_url)
	}

	openQrCodeDialog() {
		this.dialog.openDialog(QrCodeComponent,{title: "QR-код на покупку создан"})
	}

	ngOnInit(): void {
		// this.profile.getUserPromoCards().subscribe(res => {
		// 	this.promocard = res;
		// 	console.log(res);
		// });
	}

}
