import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType , ChartDataSets} from 'chart.js';
import { RESOURCES ,STATUS} from './dynamic-table/data'

@Component({
  selector: 'my-app',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class barComponent {
  @Input() dataSource:any = [];
  @Input() name:string;

  public barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      mode: 'nearest'
   },
   /* scales: {
      yAxes: [
        {
          maxBarThickness: 30
        }
      ]
    
    }*/
  };
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;


  constructor() { 
    

   }

  public barChartLabels: string[] = new Array();
  resmap = new Map<string, number>(); 

          getResourceNames(){ for(let res of RESOURCES) { 
          for(let ele of this.dataSource) { if(res.id === ele.assignedto_id && 
            this.barChartLabels.indexOf(res.name)==-1){
               this.barChartLabels.push(res.name); } } } } 

  ngOnInit() {
    this.getResourceNames();    
    this. populateDataSets();
    this.calperResourcenew();
  }
 
  mymap = new Map<string, number>();
  finalmap = new Map<string,Map<string, number>>();
  
 
  populateDataSets(){
   for(let ele of this.dataSource) {  
         for(let res of RESOURCES) {
        if(res.id === ele.assignedto_id){
 
          if(this.finalmap.has(res.name)){

          let statusmap =  this.finalmap.get(res.name);
          if(statusmap.has(STATUS[ele.status_id])){
            let ct = statusmap.get(STATUS[ele.status_id])
             statusmap.set(STATUS[ele.status_id],(ct+1))
              this.finalmap.set(res.name,statusmap);
          }else{
            statusmap.set(STATUS[ele.status_id],1);
            this.finalmap.set(res.name,statusmap);
          }
 
          }else{
            let mymap = new Map<string, number>();
            mymap.set(STATUS[ele.status_id],1);
           this.finalmap.set(res.name,mymap);
          }
 
           
        }
 }
      
     }

  }
 
  public barChartData2: ChartDataSets[] = [];
 
 calperResourcenew(){
 let pdata: number[] = new Array();
 let retestdata: number[] = new Array();
 let untesteddata: number[] = new Array();
 let faileddata: number[] = new Array();
 let blockeddata: number[] = new Array();
 let notinscope: number[] = new Array();
 let notpushed:number[] = new Array();
   for(let ele of this.barChartLabels) {
 
      if(this.finalmap.has(ele)){
 
        //PASSED
        if(this.finalmap.get(ele).get(STATUS[1])){
        pdata.push(this.finalmap.get(ele).get(STATUS[1]));
        } else {
          pdata.push(0);
        }
       //blocked
            if(this.finalmap.get(ele).get(STATUS[2])){
        blockeddata.push(this.finalmap.get(ele).get(STATUS[2]));
        } else {
          blockeddata.push(0);
        }
       //untestd
            if(this.finalmap.get(ele).get(STATUS[3])){
        untesteddata.push(this.finalmap.get(ele).get(STATUS[3]));
        }else {
          untesteddata.push(0);
        }
       //retest
            if(this.finalmap.get(ele).get(STATUS[4])){
        retestdata.push(this.finalmap.get(ele).get(STATUS[4]));
        }else {
          retestdata.push(0);
        }
       //failed
            if(this.finalmap.get(ele).get(STATUS[5])){
        faileddata.push(this.finalmap.get(ele).get(STATUS[5]));
        }else {
          faileddata.push(0);
        }
 
            if(this.finalmap.get(ele).get(STATUS[6])){
        notinscope.push(this.finalmap.get(ele).get(STATUS[6]));
        }else {
          notinscope.push(0);
        }
 
            if(this.finalmap.get(ele).get(STATUS[7])){
        notpushed.push(this.finalmap.get(ele).get(STATUS[7]));
        }else {
          notpushed.push(0);
        }
 
        
 
 
      }
 
   }


     if(pdata.length >0){
       this.barChartData2.push({ data: pdata, label: 'Passed', stack: 'a' , backgroundColor: '#2FB428', hoverBackgroundColor:'#2FAA28',barThickness: 20});
     } 
 
     if(blockeddata.length >0){
       this.barChartData2.push({ data: blockeddata, label: 'Blocked', stack: 'a', backgroundColor: '#AA623C', hoverBackgroundColor:'#AC6037',barThickness: 20 });
     }
 
     if(untesteddata.length >0){
       this.barChartData2.push({ data: untesteddata, label: 'Untested', stack: 'a',barThickness: 20 });
     }
 
     if(retestdata.length >0){
       this.barChartData2.push({ data: retestdata, label: 'Retest', stack: 'a', backgroundColor:'#55C0C6', hoverBackgroundColor: '#49C2C9',barThickness: 20 });
     }
 
     if(faileddata.length >0){
       this.barChartData2.push({ data: faileddata, label: 'Failed', stack: 'a' , backgroundColor: '#E54545', hoverBackgroundColor:'#E53B3B',barThickness: 20});
     }
 
     if(notinscope.length >0){
       this.barChartData2.push({ data: notinscope, label: 'Not In Scope', stack: 'a',barThickness: 20 });
     }
 
     if(notpushed.length >0){
       this.barChartData2.push({ data: notpushed, label: 'Not Pushed To QA', stack: 'a',barThickness: 20 });
     }
 
 }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

 
  


}
