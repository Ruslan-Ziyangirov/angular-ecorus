import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@pages/home/home.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { SwiperComponent } from '@components/swiper/swiper.component';
import { SwiperBannerCardComponent } from '@components/cards/swiper-banner-card/swiper-banner-card.component';
import { SwiperModule } from 'swiper/angular';
import { MainPageCardComponent } from '@components/cards/main-page-card/main-page-card.component';
import { EcomarketComponent } from '@pages/ecomarket/ecomarket.component';
import { FiltersComponent } from '@components/ui/buttons/filters/filters.component';
import { CheckboxesComponent } from '@components/ui/checkboxes/checkboxes.component';
import { FilterCheckboxesComponent } from '@components/filter-checkboxes/filter-checkboxes.component';
import { ProductCardComponent } from '@components/cards/product-card/product-card.component';
import { ButtonMediumComponent } from '@components/ui/buttons/button-medium/button-medium.component';
import { ModalContainerComponent } from '@components/modals/modal-container/modal-container.component';
import { LoginFormComponent } from '@components/forms/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { FormErrorMessageComponent } from '@components/ui/form-error-message/form-error-message.component';
import { DialogService } from '@services/dialog.service';
import { Dialog, DialogModule } from '@angular/cdk-experimental/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { DialogCloseDirective } from '@directives/dialog-close.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModalComponent } from './components/ui/buttons/button-modal/button-modal.component';

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
		ProductCardComponent,
		ButtonMediumComponent,
		ModalContainerComponent,
		LoginFormComponent,
		FormErrorMessageComponent,
		DialogCloseDirective,
  ButtonModalComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SwiperModule,
		ReactiveFormsModule,
		PortalModule,
		DialogModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
