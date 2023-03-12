import * as HighCharts from 'highcharts';

import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  highCharts: typeof HighCharts = HighCharts;

  lineChartOptions: HighCharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Electromagnets — Batteries year trend'
    },
    legend: {
      layout: 'horizontal',
    },
    xAxis: {
      categories: ["1990", "1994", "1998"]
    },
    yAxis: {
      title: {
        text: 'Number of Batteries'
      }
    },
    series: [
      {
        type: 'line',
        name: '1990',
        data: [5, 4, 5]
      },
      {
        type: 'line',
        name: '1994',
        data: [12, 10, 9]
      },
      {
        type: 'line',
        name: '1998',
        data: [17, 15, 14]
      }
  ],
  }
}
