import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { DeviceServiceac } from '../deviceac.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dac',
  templateUrl: './dac.component.html',
  styleUrls: ['./dac.component.css']
})
export class DacComponent implements OnInit {
  aaa: number = 0
  ac$ = null;

  constructor(private deviceServiceac: DeviceServiceac, private route: Router) { }

  ngOnInit(): void {
    this.ac$ = this.deviceServiceac.getAC();
  }

  turnOn() {
    this.aaa = 1
    this.deviceServiceac.toggleAC(1).subscribe(
      () => {
        console.log('Turn on AC');
        timer(1500).subscribe(
          () => {
            this.ac$ = this.deviceServiceac.getAC();
          }
        );
      }
    );
  }


  turnOff() {
    this.aaa = 0
    this.deviceServiceac.toggleAC(0).subscribe(
      () => {
        console.log('Turn off AC');
        timer(1500).subscribe(
          () => {
            this.ac$ = this.deviceServiceac.getAC();
          }
        );
      }
    );
  }

  back() {
    this.route.navigateByUrl("/management")
  }
}
