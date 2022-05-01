import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

	@Input() producer:string;
	@Input() title:string;
	@Input() gender:string;
	@Input() price: string;
	@Input() img:string;

  	constructor() {this.producer="";
		this.producer="";
		this.title="";
		this.gender="";
		this.price="";
		this.img="";
	}

  ngOnInit(): void {
  }

}
