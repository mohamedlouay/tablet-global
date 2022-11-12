import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {CountdownModule} from "ngx-countdown";
import { BlackComponent } from './black/black.component';
import {HttpClientModule} from "@angular/common/http";
import { PaymentGlobalComponent } from './payment-global/payment-global.component';
import { PaymentIndividualComponent } from './payment-individual/payment-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderStatusComponent,
    BlackComponent,
    PaymentGlobalComponent,
    PaymentIndividualComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatCardModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
