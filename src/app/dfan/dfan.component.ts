import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { DeviceServicefan } from '../devicefan.service';

@Component({
  selector: 'app-dfan',
  templateUrl: './dfan.component.html',
  styleUrls: ['./dfan.component.css']
})
export class DfanComponent implements OnInit {
  aaa: number = 0
  fan$ = null;

  constructor(private deviceServicefan: DeviceServicefan, private route: Router) { }

  ngOnInit(): void {
  }

  turnHigh() {
    this.aaa = 2
    this.deviceServicefan.toggleFAN(2).subscribe(
      () => {
        console.log('Turn on FAN');
        timer(1500).subscribe(
          () => {
            this.fan$ = this.deviceServicefan.getFAN();
          }
        );
      }
    );
  }

  turnOn() {
    this.aaa = 1
    this.deviceServicefan.toggleFAN(1).subscribe(
      () => {
        console.log('Turn on FAN');
        timer(1500).subscribe(
          () => {
            this.fan$ = this.deviceServicefan.getFAN();
          }
        );
      }
    );
  }


  turnOff() {
    this.aaa = 0
    this.deviceServicefan.toggleFAN(0).subscribe(
      () => {
        console.log('Turn off FAN');
        timer(1500).subscribe(
          () => {
            this.fan$ = this.deviceServicefan.getFAN();
          }
        );
      }
    );
  }

  back() {
    this.route.navigateByUrl("/management")
  }
}