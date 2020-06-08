import { Component, OnInit, Input } from '@angular/core';
import { RESOURCES, STATUS } from './data';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  @Input() tableHeader:string;
  @Input() dataSource:any = [];
  dataSourceToDisplay:any [];
  displayedColumns: string[] = [];
  grandTotals: any = {};

  constructor() {
  }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData() {
    this.dataSourceToDisplay = [];
    if(this.tableHeader == 'Resource Wise') {
      this.resourceWise();
    } else {
      this.createData();
    }
    this.displayedColumns = Object.keys(this.dataSourceToDisplay[0]);
    this.grandTotalCal();
  }

  grandTotalCal() {
    if(this.tableHeader == 'Resource Wise') {
      this.grandTotals['Assigned To'] = "Grand Total";
    }
    Object.keys(STATUS).forEach(element => {
      this.grandTotals[STATUS[element]] = this.dataSourceToDisplay.map(t => t[STATUS[element]]).reduce((acc, value) => acc + value, 0);
      if(this.grandTotals[STATUS[element]] == 0) {
        this.displayedColumns.splice(this.displayedColumns.indexOf(STATUS[element]),1);
      }
    });
    this.grandTotals['Grand Total'] = this.dataSourceToDisplay.map(t => t['Grand Total']).reduce((acc, value) => acc + value, 0);
  }

  filterByWholeValue(array, string) {
    let retunEle = null;
    array.forEach((element, index) => {
      if (element['Assigned To'] == string) {
        retunEle = {element, 'index' :index};
      } else if (element['Application'] == string) {
        retunEle = {element, 'index' :index};
      } else if (element['Module'] == string) {
        retunEle = {element, 'index' :index};
      } else if (element['Sub Module'] == string) {
        retunEle = {element, 'index' :index};
      }
    });
    return retunEle;
  }

  resourceWise() {
    this.dataSource.forEach(element => {
      for(let res of RESOURCES) {
        if(element.assignedto_id == res.id) {
          if(this.filterByWholeValue(this.dataSourceToDisplay, res.name)) {
            let x = this.filterByWholeValue(this.dataSourceToDisplay, res.name);
            let index = x.index;
            this.dataSourceToDisplay[index][STATUS[element.status_id]] += 1;
            this.dataSourceToDisplay[index]["Grand Total"] += 1;
            break;
          } else {
            let obj = {
              "Assigned To": '',
              "Passed": 0,
              "Blocked": 0,
              "Untested": 0,
              "Retest": 0,
              "Failed": 0,
              "Not In Scope": 0,
              "Not Pushed To QA": 0,
              "Grand Total": 1
            };
            obj['Assigned To'] = res.name;
            obj[STATUS[element.status_id]] += 1;
            this.dataSourceToDisplay.push(obj);
            break;
          }
        }
      }
    });
  }

  createData() {
    let objProp;
    let objKey;
    if(this.tableHeader == 'Application Wise') {
      objProp = 'custom_application';
      objKey = 'Application';
    } else if(this.tableHeader == 'Module Wise') {
      objProp = 'custom_module';
      objKey = 'Module';
    } else if(this.tableHeader == 'Sub Module Wise') {
      objProp = 'custom_submodule';
      objKey = 'Sub Module';
    }
    this.dataSource.forEach(element => {
      if(this.filterByWholeValue(this.dataSourceToDisplay, element[objProp])) {
        let x = this.filterByWholeValue(this.dataSourceToDisplay, element[objProp]);
        let index = x.index;
        this.dataSourceToDisplay[index][STATUS[element.status_id]] += 1;
        this.dataSourceToDisplay[index]["Grand Total"] += 1;
      } else {
        let obj = {
          "Passed": 0,
          "Blocked": 0,
          "Untested": 0,
          "Retest": 0,
          "Failed": 0,
          "Not In Scope": 0,
          "Not Pushed To QA": 0,
          "Grand Total": 1
        };
        let x = {};
        x[objKey] = element[objProp];
        obj = {...x, ...obj};
        obj[STATUS[element.status_id]] += 1;
        this.grandTotals[objKey] = "Grand Total";
        this.dataSourceToDisplay.push(obj);
      }
    });
  }
}