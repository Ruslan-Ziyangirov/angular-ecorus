import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-large-input',
  templateUrl: './large-input.component.html',
  styleUrls: ['./large-input.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LargeInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
