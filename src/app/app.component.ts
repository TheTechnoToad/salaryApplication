import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { getLocaleNumberFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  tax;
  $hourlyIncome;
  $dailyIncome;
  $weeklyIncome;
  $monthlyIncome;
  $salaryInput;
  $yearlyIncome;
  $hourlyWithTaxIncome;
  $dailyWithTaxIncome;
  $weeklyWithTaxIncome;
  $monthlyWithTaxIncome;
  $yearlyWithTaxIncome;

  mainCalcFunction() {
      if (this.$salaryInput >= 0 && this.$salaryInput < 9326) {
        console.log('bracket 1');
        this.tax = this.$salaryInput * .1;
        console.log(this.tax);
      } else if (this.$salaryInput >= 9326 && this.$salaryInput < 37951) {
        console.log('bracket 2');
        this.tax = ((this.$salaryInput - 9325) * .15 ) + 932.50;
        console.log(this.tax);
      } else if (this.$salaryInput >= 37951 && this.$salaryInput < 91901) {
        this.tax = ((this.$salaryInput - 37950) * .25 ) + 5226.25;
        console.log('bracket 3');
        console.log(this.tax);
      } else if (this.$salaryInput >= 91901 && this.$salaryInput < 191651) {
        this.tax = ((this.$salaryInput - 91900) * .28 ) + 18713.75;
        console.log('bracket 4');
        console.log(this.tax);
      } else if (this.$salaryInput >= 191651 && this.$salaryInput < 416701) {
        this.tax = ((this.$salaryInput - 191650) * .33 ) + 46643.75;
        console.log('bracket 5');
        console.log(this.tax);
      } else if (this.$salaryInput >= 416701 && this.$salaryInput < 418401) {
        this.tax = ((this.$salaryInput - 416700) * .35 ) + 120910.25;
        console.log('bracket 6');
        console.log(this.tax);
      } else if (this.$salaryInput >= 418401) {
        this.tax = ((this.$salaryInput - 418400) * .396 ) + 121505.25;
        console.log('bracket 7');
        console.log(this.tax);
        }
    this.$yearlyIncome = (this.$salaryInput);
    this.$monthlyIncome = (this.$yearlyIncome / 12).toFixed(2);
    this.$weeklyIncome = (this.$yearlyIncome / 52.134).toFixed(2);
    this.$dailyIncome = (this.$weeklyIncome / 5).toFixed(2);
    this.$hourlyIncome = (this.$dailyIncome / 8).toFixed(2);

    this.$yearlyWithTaxIncome = (this.$salaryInput - this.tax);
    this.$monthlyWithTaxIncome = (this.$yearlyWithTaxIncome / 12).toFixed(2);
    this.$weeklyWithTaxIncome = (this.$yearlyWithTaxIncome / 52.134).toFixed(2);
    this.$dailyWithTaxIncome = (this.$weeklyWithTaxIncome / 5).toFixed(2);
    this.$hourlyWithTaxIncome = (this.$dailyWithTaxIncome / 8).toFixed(2);
  }
}
