import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-button-small',
  templateUrl: './button-small.component.html',
  styleUrls: ['./button-small.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonSmallComponent implements OnInit {

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
