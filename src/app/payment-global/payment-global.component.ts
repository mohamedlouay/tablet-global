import {Component, OnInit} from '@angular/core';
import {getLocaleTimeFormat} from "@angular/common";
import {Router} from "@angular/router";
import {OrderStatusService} from "../order-status/order-status.service";
import {Payment_globalService} from "./payment_global.service";
import {OrderStatusResponseModel} from "../order-status/order-status.component";


export interface TabletInvoiceDto {
  tabletId: number,
  sum: number,
  itemDtos: itemDto[]

}
export interface itemDto {
  name: string,
  price: number,
}




@Component({
  selector: 'app-payment',
  templateUrl: './payment-global.component.html',
  styleUrls: ['./payment-global.component.css']
})
export class PaymentGlobalComponent implements OnInit {

  listTabletInvoice!: TabletInvoiceDto[];
  total = 0;

  constructor(private router: Router, private service: Payment_globalService) {




  }

  ngOnInit(): void {
    this.getInvoice();
  }


  calculateSum() {
    for (const invoice of this.listTabletInvoice) {
      console.log(invoice)
      this.total = this.total + invoice.sum;
    }


  }


  getInvoice(){
    let resp = this.service.getInvoice();

    resp.subscribe(data => {
      this.listTabletInvoice = data as TabletInvoiceDto[];
      console.log(this.listTabletInvoice);
      this.calculateSum();
    });
  }

  checkIndividualTablet() {
    alert("Please everyone check their tablet to complete the payment")
  }

  thanks() {
    alert("thank you for paying, see you soon")

  }
}
