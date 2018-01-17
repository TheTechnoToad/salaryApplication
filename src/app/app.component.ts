import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //displayedColumns = ['position', 'name', 'weight', 'symbol'];
  $hourlyIncome;
  $dailyIncome;
  $weeklyIncome;
  $monthlyIncome;
  $salaryInput;
  mainCalcFunction() {
    this.$monthlyIncome = this.$salaryInput / 12;
    this.$weeklyIncome = this.$salaryInput / 52.134;
    this.$dailyIncome = this.$weeklyIncome / 5;
    this.$hourlyIncome = this.$dailyIncome / 8;
  }
}
