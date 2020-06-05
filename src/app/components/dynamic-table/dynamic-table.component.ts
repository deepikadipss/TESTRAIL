import { Component, OnInit, Input } from '@angular/core';
import { MOCKDATA } from './mock-data';
import { RESOURCES } from './data';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  @Input() tableHeader:string;
  dataSource = MOCKDATA;
  dataSourceToDisplay:any [];
  displayedColumns: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData() {
    this.dataSourceToDisplay = [];
    if(this.tableHeader == 'Resource Wise') {
      this.dataSource.forEach(element => {
        let obj = {
          'Assigned To' : '',
          'Passed' : 0,
          'Failed' : 0
        };
        RESOURCES.forEach(res => {
          if(element.assignedto_id == res.id) {
            obj['Assigned To'] = res.name;
            obj['Passed'] = 0;
            obj['Failed'] = 0;
          }
        });
        if(element.status_id == 1) {
          obj['Passed'] += 1;
        } else {
          obj['Failed'] += 1;
        }
        this.dataSourceToDisplay.push(obj);
      });
    }
    this.displayedColumns = Object.keys(this.dataSourceToDisplay[0]);
  }
}


// {
//   "id": 471174,
//   "case_id": 52839,
//   "status_id": 1,
//   "assignedto_id": 5,
//   "run_id": 44,
//   "title": "ExploreTrip_Ancillary_Automatic Check In_Select Automatic Check In_Verify price displayed for the Automatic Check Inin Reserve page from Call Disposition_MultiCity_MultiPax",
//   "template_id": 1,
//   "type_id": 7,
//   "priority_id": 5,
//   "estimate": "5m",
//   "estimate_forecast": "5m",
//   "refs": null,
//   "milestone_id": null,
//   "custom_automation_type": 0,
//   "custom_jira_id": null,
//   "custom_source": 1,
//   "custom_scenario": 1,
//   "custom_mondeebusinessseverity": 1,
//   "custom_dependency": 1,
//   "custom_scenariotype": 2,
//   "custom_regression": 1,
//   "custom_sanity": 1,
//   "custom_smoketest": 2,
//   "custom_automated": 2,
//   "custom_tcwrittendate": "4/29/2020",
//   "custom_testcasereviewer": 3,
//   "custom_testcasedesigner": 5,
//   "custom_tags": "Automatic Check-In",
//   "custom_dependencyteam": "NA",
//   "custom_project": "TripPro",
//   "custom_module": "Ancillaries",
//   "custom_submodule": "Automatic Check-In",
//   "custom_application": "ET Trippro",
//   "custom_mondeeplatform": null,
//   "custom_preconds": "1.App Managemnt- Automatic Check Inshould be enabled\r\n 2.Chrome browser must be installed\r\n 3.User should have proper login permissions\r\n4.agent should be automatically switch to Exploretrip",
//   "custom_mission": null,
//   "custom_goals": null,
//   "custom_description": "This test case will Verify price displayed for the Automatic Check Inin Reserve page from Call Disposition When User selects Automatic Check InOption as a Ancillary for multicity Search MultiPax in Explore Trip Application",
//   "custom_steps": [
//       {
//           "content": "Launch the URL < >\n \n Enter the credentials for user name and password and click on Submit button\n \n Select ExploreTrip in the top Dropdown\n \n Attend a Customer call\n \n Select a MultiCity search with MultiPax Select any itenary and navigate to Reserve page\n \n Select Automatic Check Inand observe the details\n \n Observe the reserve page",
//           "expected": "Homepage must be launched with Hyperlinks Features, Price,Tour Apps,Contact us Login and Get Started,below that Advertisement must be displayed with changing background with Sign Up and Take the tour button below that 3 webinars must be present with Date and Time along with register button below that 5 screenshots must be present and below that Subscription packages must be present and below that GDS partner names must be there and below that Take the Tour. Terms of Service,Get Started,Contact us,FAQs and contact us details must be present. \n \n User should be succesfully logged in and able to see all the applications\n \n Explore Trip option should be selected\n \n Dispostion screen should be displayed \n \n User should succesfully navigate till Reserve page\n \n the Automatic Check Inis enable and Automatic Check Inprice details should be displayed correctly.\n \n the Automatic Check Inprice is displayed correctly in price details in reserve page."
//       },
//       {
//           "content": "",
//           "expected": ""
//       }
//   ]
// }