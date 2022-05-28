import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-collection-point-skeleton',
  templateUrl: './collection-point-skeleton.component.html',
  styleUrls: ['./collection-point-skeleton.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
