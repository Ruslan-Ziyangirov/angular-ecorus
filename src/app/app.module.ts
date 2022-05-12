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
import { SigninFormComponent } from '@components/forms/signin-form/signin-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { FormErrorMessageComponent } from '@components/ui/form-error-message/form-error-message.component';
import { DialogModule } from '@angular/cdk-experimental/dialog';
import { DialogCloseDirective } from '@directives/dialog-close.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModalComponent } from './components/ui/buttons/button-modal/button-modal.component';
import { PartnersLoginFormComponent } from './components/forms/partners-login-form/partners-login-form.component';
import { SignupFormComponent } from './components/forms/signup-form/signup-form.component';
import { SigninWithSmsFormComponent } from '@components/forms/signin-with-sms-form/signin-with-sms-form.component';
import { EnterTheCodeFormComponent } from './components/forms/enter-the-code-form/enter-the-code-form.component';
import { MenuBurgerComponent } from './components/modals/menu-burger/menu-burger.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UrlInterceptorService } from '@services/url-interceptor.service';
import { ErrorInterceptorService } from '@services/error-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorService } from '@services/auth-interceptor.service';
import { QrCodeComponent } from './components/modals/qr-code/qr-code.component';
import { BottomSheetComponent } from './components/bottom-sheets/bottom-sheet/bottom-sheet.component';
import { FiltersBottomSheetComponent } from './components/bottom-sheets/filters-bottom-sheet/filters-bottom-sheet.component';
import { ButtonSmallComponent } from './components/ui/buttons/button-small/button-small.component';


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
		SigninFormComponent,
		FormErrorMessageComponent,
		DialogCloseDirective,
	  	ButtonModalComponent,
	  	PartnersLoginFormComponent,
	  	SignupFormComponent,
	  	SigninWithSmsFormComponent,
	  	EnterTheCodeFormComponent,
	  	MenuBurgerComponent,
    QrCodeComponent,
    BottomSheetComponent,
    FiltersBottomSheetComponent,
    ButtonSmallComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SwiperModule,
		ReactiveFormsModule,
		PortalModule,
		DialogModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ToastrModule.forRoot({
			timeOut: 2500,
			positionClass: 'toast-top-right',
			preventDuplicates: true,
		}),
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: UrlInterceptorService,
		multi: true,
	},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptorService,
			multi: true
		},

		],
	bootstrap: [AppComponent]
})
export class AppModule {
}
