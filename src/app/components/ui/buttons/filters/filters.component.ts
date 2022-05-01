import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-filters-btn',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {

	@Input() type: any;


	constructor() {
		this.type ="";
	}

  ngOnInit(): void {
  }

}
