import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ecomarket-skeleton',
  templateUrl: './ecomarket-skeleton.component.html',
  styleUrls: ['./ecomarket-skeleton.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EcomarketSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
