import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Partner } from '../partner';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Colors, Color } from 'ng2-charts';

@Component({
  selector: 'app-partner-chart',
  templateUrl: './partner-chart.component.html',
  styleUrls: ['./partner-chart.component.css']
})
export class PartnerChartComponent implements OnChanges {

  @Input() partners:Partner[] = [];

   doughnutChartLabels: Label[] = ["Nothing"];
   doughnutChartData: MultiDataSet = [[]];
   //doughnutChartColors: any[] = [];
   options: any = {
    legend: { position: 'right' }
  }

  doughnutChartColors = [
    {
      backgroundColor: [],
      hoverBackgroundColor: []
    }
  ];

   points: number[];
   
   doughnutChartType: ChartType = 'doughnut';

   ngOnChanges(changes: SimpleChanges) {
       this.doughnutChartData = [];
       this.doughnutChartLabels = [];
       this.points = [];
       this.partners.forEach(partner => {
           this.doughnutChartLabels.push(partner.firstName);
           this.points.push(partner.percentage);
           let color = generateColor();
           this.doughnutChartColors[0].backgroundColor.push(color[0]);
           this.doughnutChartColors[0].hoverBackgroundColor.push(color[1]);
       });
       this.doughnutChartData.push(this.points);
   }

}

function generateColor(){
    var r = Math.floor(Math.random() * 200);
    var rr = r + 40;
    var g = Math.floor(Math.random() * 200);
    var b = Math.floor(Math.random() * 200);
    var c:any[] = [];
    c[0] =  'rgb(' + r + ', ' + g + ', ' + b + ')';
    c[1] =  'rgb(' + rr + ', ' + g + ', ' + b + ')';
   return c;
}

