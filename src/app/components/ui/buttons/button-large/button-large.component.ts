import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-button-large',
  templateUrl: './button-large.component.html',
  styleUrls: ['./button-large.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonLargeComponent {

	@Input() title: string;
	@Input() color: string;
	@Input() background: string;
	@Input() submitFunc?: any
	@Input() type?:any

	constructor() {
		this.title = "";
		this.color = "";
		this.background = "";

	}
}
