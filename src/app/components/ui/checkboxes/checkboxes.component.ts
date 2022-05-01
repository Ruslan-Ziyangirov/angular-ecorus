import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxesComponent implements OnInit {

	@Input() title: string;
	@Input() isChecked: boolean;
	@Input() checkHandler:any;
	@Input() index?: number;

  	constructor() {
		  this.title ="";
		  this.isChecked=false;
		  this.checkHandler="";
	}

  ngOnInit(): void {
  }

}
