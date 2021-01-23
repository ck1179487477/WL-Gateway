import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { DeviceService } from '../device.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dlight',
  templateUrl: './dlight.component.html',
  styleUrls: ['./dlight.component.css']
})
export class DlightComponent implements OnInit {
  aaa: number = 0
  led$ = null;

  constructor(private deviceService: DeviceService, private route: Router) { }

  ngOnInit(): void {//页面加载时获取灯的状态
    this.led$ = this.deviceService.getLED();
    
  }

  turnOn() {
    this.aaa = 1
    this.deviceService.toggleLED(1).subscribe(
      () => {
        console.log('Turn on LED');
        timer(1500).subscribe(
          () => {
            this.led$ = this.deviceService.getLED();
          }
        );
      }
    );
  }


  turnOff() {
    this.aaa = 0
    this.deviceService.toggleLED(0).subscribe(
      () => {
        console.log('Turn off LED');
        timer(1500).subscribe(
          () => {
            this.led$ = this.deviceService.getLED();
          }
        );
      }
    );
  }

  back() {
    this.route.navigateByUrl("/management")
  }
}
