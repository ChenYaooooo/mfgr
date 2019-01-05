import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppHeaderComponent } from './views/app-header/app-header.component';
import { AppFooterComponent } from './views/app-footer/app-footer.component';
import { AppDashboardComponent } from './views/app-dashboard/app-dashboard.component';
import { AppAboutUsComponent } from './views/app-about-us/app-about-us.component';
import { AppProductServiceComponent } from './views/app-product-service/app-product-service.component';
import { AppOrderComponent } from './views/app-order/app-order.component';
import { AppContactComponent } from './views/app-contact/app-contact.component';
import { HelloWorldComponent } from './views/hello-world/hello-world.component';
import { Header1Component } from './views/header1/header1.component';
import { DashboardSwiperComponent } from './views/card/dashboard-swiper/dashboard-swiper.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppDashboardComponent,
    AppAboutUsComponent,
    AppProductServiceComponent,
    AppOrderComponent,
    AppContactComponent,
    HelloWorldComponent,
    Header1Component,
    DashboardSwiperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
