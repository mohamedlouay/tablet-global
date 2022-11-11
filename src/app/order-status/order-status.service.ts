import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {

  constructor(private http:HttpClient) { }


  public getTimeToBeReady()
  {
    return this.http.get("http://localhost:8080/orderStatus");
  }

}
