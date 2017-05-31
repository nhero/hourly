import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-contractor',
  templateUrl: './to-contractor.component.html',
  styleUrls: ['./to-contractor.component.css']
})
export class ToContractorComponent implements OnInit {
  salary = 80000;
  workingDays = 260; // 52 * 5
  paidDaysOff = 20;
  hourlyRate = this.getHourlyRate(this.salary, this.workingDays, this.paidDaysOff);

  getHourlyRate(salary, workingDays, paidDaysOff) {
    const hours = (workingDays - paidDaysOff) * 8;
    const rate = this.salary/hours;

    return rate;
  }

  constructor() { }

  ngOnInit() {
  }

  calculate() {
    this.hourlyRate = this.getHourlyRate(this.salary, this.workingDays, this.paidDaysOff);
  }
}
