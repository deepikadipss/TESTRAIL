import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(
    private http: HttpClient
  ) { }

  getTests() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('srinivasaraos@mondee.com'+':'+'mmss4UUU')
      })
    };
    this.http.get<any>('mondeeTestRail/index.php?/api/v2/get_tests/44', httpOptions).subscribe(data => {
      return data;
    }, error => {
      console.log('Error: ', error);
    });
  }

}
