import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoCardComponent implements OnInit {

	@Input() cost: number;
	@Input() date: string;
	@Input() link: string;

  constructor() {
	  this.cost=1000;
	  this.date="25.09.2021";
	  this.link="adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu...";
  }

  ngOnInit(): void {
  }

}
