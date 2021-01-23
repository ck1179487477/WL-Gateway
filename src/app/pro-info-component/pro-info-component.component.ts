import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pro-info-component',
  templateUrl: './pro-info-component.component.html',
  styleUrls: ['./pro-info-component.component.css']
})
export class ProINFOComponentComponent implements OnInit {

  constructor(private route: Router) { }
  // light() {
  //   this.route.navigateByUrl('/dlight')
  // }
  ws() {
    this.route.navigateByUrl('/dws')
  }
  // fan() {
  //   this.route.navigateByUrl('/dfan')
  // }
  // ac() {
  //   this.route.navigateByUrl('/dac')
  // }

  ngOnInit(): void {
  }


}
