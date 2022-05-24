import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProfileService } from '@services/profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCardComponent  {

	@Input() name:string;
	@Input() telephone:string;
	@Input() email:string;
	@Input() image:string;

  	constructor(private profile: ProfileService) {
		  this.name ="";
		  this.telephone="";
		  this.email="";
		  this.image="";
	}

}
