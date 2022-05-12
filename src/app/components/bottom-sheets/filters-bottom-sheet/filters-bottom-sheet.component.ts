import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-filters-bottom-sheet',
  templateUrl: './filters-bottom-sheet.component.html',
  styleUrls: ['./filters-bottom-sheet.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersBottomSheetComponent {

	@Input() allGenders: Array<any>;
	@Input() allTypes: Array<any>;
	@Input() allBrands: Array<any>;


	constructor() {

		this.allGenders = [
			{name: "Мужской", checked: false},
			{name: "Женский", checked:false}
		]
		this.allTypes = [
			{name: "Одежда", checked: false},
			{name: "Обувь", checked: false},
			{name: "Аксессуары", checked: false}
		]
		this.allBrands = [
			{name: "H&M", checked: false},
			{name: "P&B", checked: false},
			{name: "Adidas", checked: false},
			{name: "Nike", checked: false},
			{name: "Rebook", checked: false}
		]
	}



}
