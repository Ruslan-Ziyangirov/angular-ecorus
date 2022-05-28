import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-skeleton',
  templateUrl: './home-skeleton.component.html',
  styleUrls: ['./home-skeleton.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
