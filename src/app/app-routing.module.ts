import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';
import { ProfileComponent } from '@pages/profile/profile.component';
import { AuthenticationGuard } from '@guards/auth.guard';
import { PromoCardComponent } from '@components/cards/promo-card/promo-card.component';
import { HistoryCardComponent } from '@components/cards/history-card/history-card.component';

const profileRoutes: Routes = [
	{ path: 'promocode', component: PromoCardComponent },
	{ path: 'history', component: HistoryCardComponent }
]

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path:'collectionpoints',
		component: HomeComponent,
	},
	{
		path:'ecomarket',
		component: EcomarketComponent,
	},
	{
		path:'aboutservice',
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
