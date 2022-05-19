import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryCardComponent implements OnInit {

	@Input() address: string;
	@Input() material: string;
	@Input() date?: string;
	@Input() cost?: number;

  constructor() {
	  this.address ="Казань, Кремлёвская, 88";
	  this.material ="Пластик: 1 кг";
	  this.date = "25.09.2021";
	  this.cost= 1000;
  }

  ngOnInit(): void {
  }

}
