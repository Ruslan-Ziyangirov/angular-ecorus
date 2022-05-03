import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-button-modal',
  templateUrl: './button-modal.component.html',
  styleUrls: ['./button-modal.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonModalComponent  {

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
}
