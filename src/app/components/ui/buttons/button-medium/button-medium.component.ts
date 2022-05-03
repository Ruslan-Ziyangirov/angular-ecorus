import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-button-medium',
  templateUrl: './button-medium.component.html',
  styleUrls: ['./button-medium.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonMediumComponent implements OnInit {

	@Input() title: string;
	@Input() color: string;
	@Input() background: string;
	@Input() onClick?: any;
	@Input() type?:any

	constructor() {
		this.title = "";
		this.color = "";
		this.background = "";

	}

  ngOnInit(): void {
  }

}
