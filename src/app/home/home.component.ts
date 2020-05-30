import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  testData:any;

  constructor(
    public ajaxService: AjaxService
  ) { }

  ngOnInit(): void {
    this.ajaxService.getTests();
    console.log(this.testData);
  }

}
