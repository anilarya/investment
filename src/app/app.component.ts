import { Component, ViewChild , OnInit} from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  @ViewChild(BaseChartDirective) doughnutChartComponent: BaseChartDirective;
  legendData: any;
  public doughnutChartLabels:string[] = ['Equity', 'Bond', 'Others', 'Cash'];
  public doughnutChartData:number[] = [350, 450, 100, 200];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  constructor(private cdRef : ChangeDetectorRef){ 
  }

  private getLegendCallback = (function(self) {
	    function handle(chart) { 
	    	 return chart.legend.legendItems;
	    }
	    return function(chart) {
	        return handle(chart);
	    };


	})(this);

  public doughnutChartOptions:any = {
     	legend: {
     		position: 'right',
 		},
 		legendCallback: this.getLegendCallback
  };

  
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  public barChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
	    display: false,
	},
	scales: {
   xAxes: [
    {
        display: false
    }
  ],
   yAxes: [
      {
        display: false
    }
]
}
  };
  
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40] },
    {data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40] },
    {data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40] },
    {data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40] }
  ];
  


  ngOnInit() {
  	this.cdRef.detectChanges()
    this.legendData = this.doughnutChartComponent.chart.generateLegend( );
	}

}
