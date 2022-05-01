import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DataItems } from '../../stores/products-store';

@Component({
  selector: 'app-ecomarket',
  templateUrl: './ecomarket.component.html',
  styleUrls: ['./ecomarket.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcomarketComponent implements OnInit {

	@Input() products: Array<any>;

  constructor() {
	  this.products = DataItems
  }

  ngOnInit(): void {
  }

}
