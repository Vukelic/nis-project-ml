import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectNewDate(){
    this.router.navigateByUrl('/dashboard-calendar');
  }
}
