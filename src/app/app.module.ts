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
import { ButtonLargeComponent } from '@components/ui/buttons/button-large/button-large.component';
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
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileCardComponent } from './components/cards/profile-card/profile-card.component';
import { PromoCardComponent } from './components/cards/promo-card/promo-card.component';
import { HistoryCardComponent } from './components/cards/history-card/history-card.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CollectionPointComponent } from './pages/collection-point/collection-point.component';
import { LargeInputComponent } from './components/ui/inputs/large-input/large-input.component';
import { DropDownListComponent } from './components/ui/drop-down-list/drop-down-list.component';
import { CollectionPointCardComponent } from './components/cards/collection-point-card/collection-point-card.component';
import { CollectionPointFullCardComponent } from './components/cards/collection-point-full-card/collection-point-full-card.component';
import { CollectionPointListBottomSheetComponent } from './components/bottom-sheets/collection-point-list-bottom-sheet/collection-point-list-bottom-sheet.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { EcomarketSkeletonComponent } from './components/animation/skeleton/ecomarket-skeleton/ecomarket-skeleton.component';
import { HomeSkeletonComponent } from './components/animation/skeleton/home-skeleton/home-skeleton.component';
import { CollectionPointSkeletonComponent } from './components/animation/skeleton/collection-point-skeleton/collection-point-skeleton.component';
import { ProfileSkeletonComponent } from './components/animation/skeleton/profile-skeleton/profile-skeleton.component';


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
	  	ButtonLargeComponent,
	  	PartnersLoginFormComponent,
	  	SignupFormComponent,
	  	SigninWithSmsFormComponent,
	  	EnterTheCodeFormComponent,
	  	MenuBurgerComponent,
    QrCodeComponent,
    BottomSheetComponent,
    FiltersBottomSheetComponent,
    ButtonSmallComponent,
    ProfileComponent,
    ProfileCardComponent,
    PromoCardComponent,
    HistoryCardComponent,
    CollectionPointComponent,
    LargeInputComponent,
    DropDownListComponent,
    CollectionPointCardComponent,
    CollectionPointFullCardComponent,
    CollectionPointListBottomSheetComponent,
    EcomarketSkeletonComponent,
    HomeSkeletonComponent,
    CollectionPointSkeletonComponent,
    ProfileSkeletonComponent
	],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SwiperModule,
        ReactiveFormsModule,
        PortalModule,
        DialogModule,
        BrowserAnimationsModule,
        MatBottomSheetModule,
		NgxSkeletonLoaderModule,
        HttpClientModule,
        ToastrModule.forRoot({
            timeOut: 2500,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        }),
        LeafletModule,
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
