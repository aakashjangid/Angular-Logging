import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private logger: NGXLogger, private http: HttpClient) { }

  ngOnInit(): void {
  }

  postLogs() {
    this.http.get('/loggingApi/logging/getData').subscribe(
      data => {
        console.log(data);
      }, err => {
        console.log(err);
      }
    );
  }

}
