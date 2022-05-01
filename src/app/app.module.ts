import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperBannerCardComponent } from './components/cards/swiper-banner-card/swiper-banner-card.component';
import { SwiperModule } from 'swiper/angular';
import { MainPageCardComponent } from './components/cards/main-page-card/main-page-card.component';
import { EcomarketComponent } from './pages/ecomarket/ecomarket.component';
import { FiltersComponent } from './components/ui/buttons/filters/filters.component';
import { CheckboxesComponent } from './components/ui/checkboxes/checkboxes.component';
import { FilterCheckboxesComponent } from './components/filter-checkboxes/filter-checkboxes.component';
import { ProductCardComponent } from './components/cards/product-card/product-card.component';

@NgModule({
	declarations: [
		AppComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  SwiperComponent,
  SwiperBannerCardComponent,
  MainPageCardComponent,
  EcomarketComponent,
  FiltersComponent,
  CheckboxesComponent,
  FilterCheckboxesComponent,
  ProductCardComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SwiperModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
