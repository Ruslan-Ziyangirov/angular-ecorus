import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

interface List {
	title: string;
	subtitle: string[];
}

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DropDownListComponent implements OnInit {

	@Input() title: string;
	@Input() array: Array<string>;

  constructor() {
	  this.array = [];
	  this.title = '';
  }

  ngOnInit(): void {
  }

}
