import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

	loading: boolean = true;

	constructor(private cdr: ChangeDetectorRef) {

	}

    ngOnInit(): void {
		setTimeout(() => {
			this.loading = false;
			this.cdr.markForCheck();
		}, 3000);
    }

}
