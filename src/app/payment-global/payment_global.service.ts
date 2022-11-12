import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {globalTabletId, individualTabletId} from "../globals";

@Injectable({
  providedIn: 'root'
})
export class Payment_globalService {


  constructor(private http:HttpClient) { }


  public getInvoice()
  {
    return this.http.get("http://localhost:8080/invoice-global/"+globalTabletId);
  }


}
