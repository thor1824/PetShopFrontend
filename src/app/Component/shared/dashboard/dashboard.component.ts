import {Component, OnInit} from '@angular/core';

import {DashboardService} from '../../../Services/dashboard.service';
import {AuthenticationService} from '../../../Services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(dashboardservice: DashboardService, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }


}
