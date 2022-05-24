import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-filter-checkboxes',
  templateUrl: './filter-checkboxes.component.html',
  styleUrls: ['./filter-checkboxes.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterCheckboxesComponent implements OnInit {

	@Input() allGenders: Array<any>;
	@Input() allTypes: Array<any>;
	@Input() allBrands: Array<any>;


  	constructor() {

		this.allGenders = [
			{name: "Мужской", checked: false},
			{name: "Женский", checked:false}
		]
		this.allTypes = [
			{name: "Выбрать все", checked: false, value: "all"},
			{name: "Одежда", checked: false},
			{name: "Обувь", checked: false},
			{name: "Аксессуары", checked: false}
		]
		this.allBrands = [
			{name: "Выбрать все", checked: false, value: "all"},
			{name: "H&M", checked: false},
			{name: "P&B", checked: false},
			{name: "Adidas", checked: false},
			{name: "Nike", checked: false},
			{name: "Rebook", checked: false}
		]
	}

	  ngOnInit(): void {
	  }


	resetFilter() {
		this.allGenders = this.allGenders.map((gender) => Object.assign({}, {
			...gender,
			checked: false
		}));
		this.allTypes = this.allTypes.map((type) => Object.assign({}, {
			...type,
			checked: false
		}));
		this.allBrands = this.allBrands.map((brand) => Object.assign({}, {
			...brand,
			checked: false
		}));
	}

}
