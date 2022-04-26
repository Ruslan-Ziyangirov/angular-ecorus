import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Navigation, SwiperOptions } from 'swiper';
import SwiperCore from 'swiper';
SwiperCore.use([Navigation]);

@Component({
	selector: 'app-swiper',
	templateUrl: './swiper.component.html',
	styleUrls: ['./swiper.component.sass']
})
export class SwiperComponent implements OnInit {


	config: SwiperOptions = {
		slidesPerView: 3,
		spaceBetween: 100,
		navigation: true,
		loop:true,
		autoplay:true,
		speed: 500
		}
		constructor() { }

		ngOnInit(): void {
		}
	};




