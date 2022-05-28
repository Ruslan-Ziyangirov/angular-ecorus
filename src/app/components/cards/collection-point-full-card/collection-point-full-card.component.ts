import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionCardPointService } from '@services/collection-point-card.service';
import { CollectionPoint } from '@models/collection-point';


@Component({
  selector: 'app-collection-point-full-card',
  templateUrl: './collection-point-full-card.component.html',
  styleUrls: ['./collection-point-full-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointFullCardComponent implements OnInit {

  constructor(private route: Router,
			  private activateRoute: ActivatedRoute,
			  private collectionPointCards: CollectionCardPointService) {
  }

  collPoint: CollectionPoint | null = null;
  id: number = this.activateRoute.snapshot.params['id'];
  cards$ = this.collectionPointCards.cards$

  ngOnInit(): void {
	  this.cards$
		  .getValue()
		  .filter((collPoint: CollectionPoint) => (collPoint.id === +this.id))
		  .map((point: CollectionPoint) => {
			  this.collPoint = point
		  })
  }

	back(){
		this.route.navigate(['/collectionPoint'])
	}

}
