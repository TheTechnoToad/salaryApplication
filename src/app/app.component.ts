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
  range0= 0;
  range1;
  range2;
  range3;
  range4;
  range5;
  range6;
  range7;
  range8;
  range9;

  $taxPercentage;
  $taxStatus;
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
  $taxBracket;

  mainCalcFunction() {
    if (this.$taxStatus === 'individual') {
      this.range1 = 9326;
      this.range2 = 37951;
      this.range3 = 91901;
      this.range4 = 191651;
      this.range5 = 416701;
      this.range6 = 418401;
      console.log(this.$taxStatus);
    } else if (this.$taxStatus === 'marriedJoint') {
      this.range1 = 18651;
      this.range2 = 75901;
      this.range3 = 153101;
      this.range4 = 233351;
      this.range5 = 416701;
      this.range6 = 470701;
      console.log(this.$taxStatus);
    } else if (this.$taxStatus === 'headOfHousehold') {
      this.range1 = 13351;
      this.range2 = 50801;
      this.range3 = 131201;
      this.range4 = 212501;
      this.range5 = 416701;
      this.range6 = 444551;
      console.log(this.$taxStatus);
    } else if (this.$taxStatus === 'marriedIndividual') {
      this.range1 = 9326;
      this.range2 = 37951;
      this.range3 = 76551;
      this.range4 = 116676;
      this.range5 = 208351;
      this.range6 = 235351;
      console.log(this.$taxStatus);
    } else {console.log('Please click a valid tax status'); }

  // Start thinking about how you're going to implement the different types of tax payers like Married, Joint, etc and use this link to get bracket info https://www.forbes.com/sites/kellyphillipserb/2016/10/25/irs-announces-2017-tax-rates-standard-deductions-exemption-amounts-and-more/#788da0bb5701

      if (this.$salaryInput >= 0 && this.$salaryInput < this.range1) {
        this.$taxBracket = '1 / 7';
        this.tax = this.$salaryInput * .1;
        console.log(this.tax);
      } else if (this.$salaryInput >= this.range1 && this.$salaryInput < this.range2) {
        this.$taxBracket = '2 / 7';
        this.tax = ((this.$salaryInput - this.range1 - 1) * .15 ) + 932.50;
        console.log(this.tax);
      } else if (this.$salaryInput >= this.range2 && this.$salaryInput < this.range3) {
        this.$taxBracket = '3 / 7';
        this.tax = ((this.$salaryInput - this.range2 - 1) * .25 ) + 5226.25;
        console.log(this.tax);
      } else if (this.$salaryInput >= this.range3 && this.$salaryInput < this.range4) {
        this.$taxBracket = '4 / 7';
        this.tax = ((this.$salaryInput - this.range3 - 1) * .28 ) + 18713.75;
        console.log(this.tax);
      } else if (this.$salaryInput >= this.range4 && this.$salaryInput < this.range5) {
        this.$taxBracket = '5 / 7';
        this.tax = ((this.$salaryInput - this.range4 - 1) * .33 ) + 46643.75;
        console.log(this.tax);
      } else if (this.$salaryInput >= this.range5 && this.$salaryInput < this.range6) {
        this.$taxBracket = '6 / 7';
        this.tax = ((this.$salaryInput - this.range5 - 1) * .35 ) + 120910.25;
        console.log(this.tax);
      } else if (this.$salaryInput >= this.range6) {
        this.$taxBracket = '7 / 7';
        this.tax = ((this.$salaryInput - 418400) * .396 ) + 121505.25;
        console.log(this.tax);
        }

    this.$taxPercentage = ((this.tax / this.$salaryInput) * 100).toFixed(2);
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
