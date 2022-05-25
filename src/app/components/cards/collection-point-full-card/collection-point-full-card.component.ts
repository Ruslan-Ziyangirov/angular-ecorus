import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CollectionCard } from '../../../mocks/collectionPoint-mock';


@Component({
  selector: 'app-collection-point-full-card',
  templateUrl: './collection-point-full-card.component.html',
  styleUrls: ['./collection-point-full-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointFullCardComponent implements OnInit {

	@Input() id?: number;
	@Input() image: any;
	@Input() address: string;
	@Input() fullAddress?: string;
	@Input() phone?: string;
	@Input() description: string;
	@Input() timetable?: string[];
	@Input() shop?: string;
	@Input() items?: Array<string>;

  constructor() {
	  this.address="";
	  this.description="";
	  this.items=[];
  }

  ngOnInit(): void {
  }

}
