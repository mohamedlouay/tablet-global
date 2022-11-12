import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderStatusComponent} from "./order-status/order-status.component";
import {BlackComponent} from "./black/black.component";
import {PaymentGlobalComponent} from "./payment-global/payment-global.component";
import {PaymentIndividualComponent} from "./payment-individual/payment-individual.component";

const routes: Routes = [
  { path: '', component: OrderStatusComponent },
  { path: 'status', component: OrderStatusComponent },
  { path: 'black', component: BlackComponent },
  { path: 'payment-global', component: PaymentGlobalComponent },
  { path: 'payment-individual', component: PaymentIndividualComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
