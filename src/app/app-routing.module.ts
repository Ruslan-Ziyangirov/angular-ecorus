import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';

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
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
