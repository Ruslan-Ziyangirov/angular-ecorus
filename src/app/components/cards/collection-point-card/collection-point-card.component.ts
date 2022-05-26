import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-collection-point-card',
  templateUrl: './collection-point-card.component.html',
  styleUrls: ['./collection-point-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointCardComponent implements OnInit {

	@Input() img: string;
	@Input() address: string;
	@Input() description: string;
	@Input() id: any;



  constructor() {
	  this.img = '';
	  this.address = '';
	  this.description = '';
  }

  ngOnInit(): void {
  }

}
