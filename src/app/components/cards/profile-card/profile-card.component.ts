import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCardComponent implements OnInit {

	@Input() name:string;
	@Input() telephone:string;
	@Input() email:string;
	@Input() image:string;

  	constructor() {
		  this.name ="";
		  this.telephone="";
		  this.email="";
		  this.image="";
	}

	ngOnInit(): void {}

}
