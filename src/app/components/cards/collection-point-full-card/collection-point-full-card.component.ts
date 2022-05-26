import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CollectionCard } from '../../../mocks/collectionPoint-mock';
import { Router } from '@angular/router';
import { CollectionCardPointService } from '@services/collection-point-card.service';


@Component({
  selector: 'app-collection-point-full-card',
  templateUrl: './collection-point-full-card.component.html',
  styleUrls: ['./collection-point-full-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointFullCardComponent implements OnInit {

	@Input() id: any;
	@Input() image: any;
	@Input() address: string;
	@Input() fullAddress?: string;
	@Input() phone?: string;
	@Input() description: string;
	@Input() timetable?: string[];
	@Input() shop?: string;
	@Input() items?: Array<string>;

  constructor(private route: Router,
			  private collectionPointCards: CollectionCardPointService) {
	  this.address="";
	  this.description="";
	  this.items=[];
  }

  cards$ = this.collectionPointCards.cards$

  ngOnInit(): void {
  }

  	getId(){
	  console.log(this.id)
	}

	back(){
		this.route.navigate(['/collectionPoint'])
	}

}
