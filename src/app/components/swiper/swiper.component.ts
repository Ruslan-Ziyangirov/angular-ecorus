import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Navigation, SwiperOptions } from 'swiper';
import SwiperCore from 'swiper';
SwiperCore.use([Navigation]);

@Component({
	selector: 'app-swiper',
	templateUrl: './swiper.component.html',
	styleUrls: ['./swiper.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class SwiperComponent implements OnInit {
	config: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 50,
		navigation: true,
		loop: true,
		autoplay: true,
	};
	onSwiper([swiper]:any) {
		console.log(swiper);
	}
	onSlideChange() {
		console.log('slide change');
	}
	constructor() { }

	ngOnInit(): void {
	}
};




