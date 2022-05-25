import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';
import { ProfileComponent } from '@pages/profile/profile.component';
import { AuthenticationGuard } from '@guards/auth.guard';
import { PromoCardComponent } from '@components/cards/promo-card/promo-card.component';
import { HistoryCardComponent } from '@components/cards/history-card/history-card.component';
import { CollectionPointComponent } from '@pages/collection-point/collection-point.component';
import { CollectionPointFullCardComponent } from '@components/cards/collection-point-full-card/collection-point-full-card.component';

const profileRoutes: Routes = [
	{ path: 'promocode', component: PromoCardComponent },
	{ path: 'history', component: HistoryCardComponent }
]

const collectionPointRoutes: Routes = [
	{path:':id', component: CollectionPointFullCardComponent}
]

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path:'collectionPoint',
		component: CollectionPointComponent,
		children: collectionPointRoutes,
	},
	{
		path:'ecomarket',
		component: EcomarketComponent,
	},
	{
		path:'aboutService',
		component: HomeComponent,
	},
	{
		path:'profile',
		component: ProfileComponent,
		canActivate: [AuthenticationGuard],
		children: profileRoutes
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
