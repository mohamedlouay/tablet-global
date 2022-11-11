import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderStatusComponent} from "./order-status/order-status.component";
import {BlackComponent} from "./black/black.component";
import {PaymentComponent} from "./payment/payment.component";

const routes: Routes = [
  { path: '', component: OrderStatusComponent },
  { path: 'status', component: OrderStatusComponent },
  { path: 'black', component: BlackComponent },
  { path: 'payment', component: PaymentComponent },
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
