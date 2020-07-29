import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  testData:any = [];
  onlypassed : string = 'onlypassed';
  runId:any;
  pageLoader:boolean = false;
  errorMsg:string = "";

  constructor(
    public ajaxService: AjaxService
  ) { }

  ngOnInit(): void {
  }

  getData() {
    this.pageLoader = true;
    this.testData = [];
    this.ajaxService.getTests(this.runId).subscribe(data=>{
      this.pageLoader = false;
      if(data) {
        this.testData = data;
        this.errorMsg = '';
      } else {
        this.errorMsg = "Run_id is not a valid test run";
      }
    }, error=>{
      this.pageLoader = false;
      this.errorMsg = "Run_id is not a valid test run";
      console.log(error);
    });
  }

}
