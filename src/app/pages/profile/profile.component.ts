import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthorizationService } from '@services/authorization.service';
import { HistoryService } from '@services/history.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

	user: any;

	loading: boolean = true;

	constructor(private historyService: HistoryService,
				private auth: AuthorizationService,
				private route: ActivatedRoute,
				private cdr: ChangeDetectorRef) {


	}

	history$ = this.historyService.history$

	ngOnInit(): void {

		setTimeout(() => {
			this.loading = false;
			this.cdr.markForCheck();
		}, 3000);

		this.auth.getProfile().subscribe(res => {
			this.user = res;
			console.log(res);
		});
	}
}
