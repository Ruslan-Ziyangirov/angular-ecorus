import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	TemplateRef,
	ViewChild
} from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';
import { environment } from '../../../environments/environment';
import { CollectionCardPointService } from '@services/collection-point-card.service';
import { HistoryService } from '@services/history.service';
import { BottomSheetService } from '@services/bottom-sheet.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection-point',
  templateUrl: './collection-point.component.html',
  styleUrls: ['./collection-point.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPointComponent implements AfterViewInit  {
	@ViewChild('templateBottomSheet') TemplateBottomSheet?: TemplateRef<any>;
	@ViewChild('collectionPointBottomSheet') collectionPointBottomSheet?: TemplateRef<any>;

	map: any;
	loading: boolean = true;

	constructor(private collectionPointCards: CollectionCardPointService,
				private bottomSheetService: BottomSheetService,
				private bottomSheet: MatBottomSheet,
				public activateRoute: ActivatedRoute,
				private cdr: ChangeDetectorRef) {
		console.log(collectionPointCards)
	}

	cards$ = this.collectionPointCards.cards$

	ngOnInit(){
		setTimeout(() => {
			this.loading = false;
			this.cdr.markForCheck();
		}, 3000);
	}

	openCollectionBottomSheet(){
		// @ts-ignore
		this.bottomSheet.open(this.collectionPointBottomSheet);
	}

	openTemplateSheetMenu() {
		// @ts-ignore
		this.bottomSheet.open(this.TemplateBottomSheet);
	}

	closeTemplateSheetMenu() {
		this.bottomSheet.dismiss();
	}


	public ngAfterViewInit(): void {
		this.loadMap();
	}

	private getCurrentPosition(): any {
		return new Observable((observer: Subscriber<any>) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((position: any) => {
					observer.next({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
					observer.complete();
				});
			} else {
				observer.error();
			}
		});
	}

	private loadMap(): void {
		this.map = L.map('map').setView([55.7887, 49.1221], 12);
		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 13,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1,
			accessToken: environment.accessToken,
		}).addTo(this.map);

		this.getCurrentPosition()
			.subscribe((position: any) => {
				this.map.flyTo([position.latitude, position.longitude], 13);

				const icon = L.icon({
					iconUrl: '../../../assets/images/point.png',
					popupAnchor: [13, 0],
				});

				const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('Мое местоположение');
				marker.addTo(this.map);
			});
	}

}
