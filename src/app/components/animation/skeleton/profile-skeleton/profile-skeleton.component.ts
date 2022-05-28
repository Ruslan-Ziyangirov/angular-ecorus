import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile-skeleton',
  templateUrl: './profile-skeleton.component.html',
  styleUrls: ['./profile-skeleton.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
