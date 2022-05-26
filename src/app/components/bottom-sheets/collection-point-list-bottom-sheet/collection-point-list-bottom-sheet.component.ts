import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CollectionCardPointService } from '@services/collection-point-card.service';
import { BottomSheetService } from '@services/bottom-sheet.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-collection-point-list-bottom-sheet',
  templateUrl: './collection-point-list-bottom-sheet.component.html',
  styleUrls: ['./collection-point-list-bottom-sheet.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointListBottomSheetComponent {

	constructor(private collectionPointCards: CollectionCardPointService) {
		console.log(collectionPointCards)
	}

	cards$ = this.collectionPointCards.cards$

}
