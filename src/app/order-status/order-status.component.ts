import {Component, OnInit} from '@angular/core';
import {ProgressBarMode} from "@angular/material/progress-bar";
import {ThemePalette} from "@angular/material/core";
import {MatCard, MatCardModule, MatCardTitle} from "@angular/material/card";
import {CountdownEvent} from "ngx-countdown";
import {Router} from "@angular/router";
import {OrderStatusService} from "./order-status.service";

export interface OrderStatusResponseModel {
  timeToBeReady: number
}

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  timeToBeReady !: number;


  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';

  value = 0;
  public CountdownConfig !: { leftTime: number; notify: number[]; };


  constructor(private router: Router, private service: OrderStatusService) {
  }

  ngOnInit(): void {

    this.getTimeToBeReady();

  }

  private initProgressBar() {
    if (this.timeToBeReady) {
      this.CountdownConfig = {
        leftTime: this.timeToBeReady,
        notify: Array.from({length: this.timeToBeReady}, (_, i) => i + 1)
      }
    }
  }

  handleEvent(event: CountdownEvent) {
    let alreadyPassed = this.timeToBeReady - (event.left / 1000)
    this.value = alreadyPassed * 100 / this.timeToBeReady;

    if (this.value == 100) {
      // change the screen to a black screen
      this.router.navigateByUrl('black');


    }
  }


  public getTimeToBeReady() {
    let resp = this.service.getTimeToBeReady();

    resp.subscribe(data => {
      this.timeToBeReady = (data as OrderStatusResponseModel).timeToBeReady;
      this.initProgressBar();

    });
  }
}
