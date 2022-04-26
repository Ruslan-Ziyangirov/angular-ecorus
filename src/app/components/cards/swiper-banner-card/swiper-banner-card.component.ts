import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-swiper-banner-card',
  templateUrl: './swiper-banner-card.component.html',
  styleUrls: ['./swiper-banner-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperBannerCardComponent implements OnInit {

	@Input() title: string;
	@Input() text: string;
	@Input() btnText: string;
	@Input() background: string;
	@Input() image: string;


	constructor() {
		this.title ="";
		this.text ="";
		this.btnText ="";
		this.background ="";
		this.image ="";
	}

  ngOnInit(): void {
  }

}
