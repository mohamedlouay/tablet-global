import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderStatusComponent} from "./order-status/order-status.component";
import {BlackComponent} from "./black/black.component";
import {PaymentGlobalComponent} from "./payment-global/payment-global.component";

const routes: Routes = [
  { path: '', component: OrderStatusComponent },
  { path: 'status', component: OrderStatusComponent },
  { path: 'black', component: BlackComponent },
  { path: 'payment-global', component: PaymentGlobalComponent },
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
