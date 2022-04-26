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

@NgModule({
	declarations: [
		AppComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  SwiperComponent,
  SwiperBannerCardComponent,
  MainPageCardComponent
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
