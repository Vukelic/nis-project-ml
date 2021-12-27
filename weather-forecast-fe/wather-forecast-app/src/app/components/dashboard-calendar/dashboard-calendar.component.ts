import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-calendar',
  templateUrl: './dashboard-calendar.component.html',
  styleUrls: ['./dashboard-calendar.component.scss']
})
export class DashboardCalendarComponent implements OnInit {
  minDate: Date | undefined;
  maxDate: Date | undefined;


  range = new FormGroup({
   // start: new FormControl(),
   // end: new FormControl(),
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.minDate = new Date(2016, 0, 1);
    this.maxDate = new Date(2019, 4, 5);
  }

  getForecast(){
    this.router.navigateByUrl('/dashboard-chart');
  }

}
