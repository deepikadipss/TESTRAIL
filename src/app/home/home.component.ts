import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  testData:any = [];
  runId:any;
  pageLoader:boolean = false;

  constructor(
    public ajaxService: AjaxService
  ) { }

  ngOnInit(): void {
  }

  getData() {
    this.pageLoader = true;
    this.ajaxService.getTests(this.runId).subscribe(data=>{
      this.pageLoader = false;
      this.testData = data;
    }, error=>{
      this.pageLoader = false;
      console.log(error);
    });
  }

}
