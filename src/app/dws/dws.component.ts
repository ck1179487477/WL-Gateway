import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dws',
  templateUrl: './dws.component.html',
  styleUrls: ['./dws.component.css']
})
export class DwsComponent implements OnInit {
  chartOption: any;
  updateOption: any;
  public xAxis = [];
  public cos = [];

  constructor(private route: Router, private httpclient: HttpClient) {
    this.chartOption = {
      title: {
        text: 'co浓度'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['co']
      },
      toolbox: {
        feature: {
          savaAsImage: {

          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          bounderGap: false,
          date: []
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'co',
          type: 'line',
          stack: '%',
          // areaStyle:{normal:{}},
          smooth: true,
          data: []
        }

      ],
    };
    this.updateOption = {};
  }

  ngOnInit(): void {
    console.log('123');
    timer(2000, 2000).subscribe(() => {
      this.httpclient.get('http://192.168.43.186:8080/ws/1000').subscribe((value: any) => {
        if (value && value.data && value.data.length) {
          let i = value.data.length - 1;
          for (let item of value.data) {
            const d = new Date(Number(item.time));
            this.xAxis[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
            this.xAxis[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : 0 + d.getMinutes());
            this.xAxis[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : 0 + d.getSeconds());
            this.cos[i] = (item.co);
            i--;
          }
          this.updateOption = {
            xAxis: [
              {
                data: this.xAxis
              }
            ],
            series: [
              {
                data: this.cos
              }
            ]
          }
        }
      })
    });
    console.log("end")
  }

  back() {
    this.route.navigateByUrl("/management")
  }

}
