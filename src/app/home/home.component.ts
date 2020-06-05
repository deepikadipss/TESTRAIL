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

  constructor(
    public ajaxService: AjaxService
  ) { }

  ngOnInit(): void {
  }

  getData() {
    this.ajaxService.getTests(this.runId).subscribe(data=>{
      this.testData = data;
    }, error=>{
      console.log(error);
    });
  }

}
