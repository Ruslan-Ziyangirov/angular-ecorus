import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		pathMatch:'full'
	},
	{
		path:'collection_points',
		component: HomeComponent,
		pathMatch:'full'
	},
	{
		path:'eco_market',
		component: EcomarketComponent,
		pathMatch:'full'
	},
	{
		path:'about_service',
		component: HomeComponent,
		pathMatch:'full'
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
