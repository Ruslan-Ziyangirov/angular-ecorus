import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-main-page-card',
  templateUrl: './main-page-card.component.html',
  styleUrls: ['./main-page-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageCardComponent  {
	@Input() title: string;
	@Input() text: string ;
	@Input() image: string;

	constructor() {
		this.title ="";
		this.text ="";
		this.image ="";
	}

	getTitle(){
		return this.title;
	}

}
