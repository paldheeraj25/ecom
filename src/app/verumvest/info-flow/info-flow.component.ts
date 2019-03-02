import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculatService } from '../calculat.service';

@Component({
  selector: 'app-info-flow',
  templateUrl: './info-flow.component.html',
  styleUrls: ['./info-flow.component.scss']
})
export class InfoFlowComponent implements OnInit {

  stepNumber: number = 1;
  // step one var
  step1elem1: string = "20-30";
  step1elem2: string = "30-40-1";
  step1elem3: string = "20-40-2";
  next: string = "next";
  back: string = "back";

  // step two var
  step2FamilyStand: string;
  ageRange: string;
  kids: string;
  investExperience: string;

  // step-4 variable

  public monthlyHouseHoldIncome: number = 0;
  public monthlyExpenses: number = 0;
  public reserveToday: number = 0;
  public assetAccumulation: number = 0;
  public assetIn10: number = 0;

  //graph for step-4
  showGraph: string = "investmentsImmobilien";
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: false
  };
  public barChartLabels = ['2019', '2020', '2021', '2023', '2024', '2025', '2026', '2027', '2028', '2029'];
  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [];
  public chartColors: any[] = [];

  //step-5 variables
  public capitalEmployed: number = 0;
  public maximumDebt: number = 0;
  public affordProperty: number = 0;

  constructor(private router: Router, private calculatSerrvice: CalculatService) { }

  ngOnInit() {
    console.log(this.calculatSerrvice.currency);

  }

  stepOneBlock(block: string) {

    switch (block) {
      case "20-30":
        this.step2FamilyStand = "single";
        this.ageRange = "20-30";
        this.kids = "noKids";
        this.investExperience = "noExperience";
        break;
      case "30-40-1":
        this.step2FamilyStand = "veziehung";
        this.ageRange = "30-40";
        this.kids = "1-2";
        this.investExperience = "1-2-year-experience";
        break;
      case "20-40-2":
        this.step2FamilyStand = "verheiratet";
        this.ageRange = "40-50";
        this.kids = "2-4";
        this.investExperience = "2-4-year-experience";
        break;
    }


    this.stepNumber = 2;
  }

  goToStep(step: number) {
    this.stepNumber = step;
    this.barChartData = [
      { data: [this.assetAccumulation, 59, 80, 81, 56, 55, 25, 23, 42, this.assetIn10], label: 'Sparen mit Zinsen' },
    ];
  }

  showGraphType(graphType: string) {
    if (graphType === 'sparenZinsen') {

      this.chartColors = [
        {
          backgroundColor: ["#f5593d"],
          borderColor: '#ffffff',
          pointBorderColor: '#fff',
        }];
      this.barChartData = [
        { data: [this.assetAccumulation, 59, 80, 81, 56, 55, 25, 23, 42, this.assetIn10], label: 'Sparen mit Zinsen' },
      ];

    } else if (graphType === 'investmentsAktien') {

      this.chartColors = [
        {
          backgroundColor: ["#007bff"],
          borderColor: '#ffffff',
          pointBorderColor: '#fff',
        }];
      this.barChartData = [
        { data: [this.assetAccumulation, 48, 40, 19, 86, 27, 34, 35, 54, this.assetIn10], label: 'Investments mit Aktien' },
      ];

    } else if (graphType === 'investmentsImmobilien') {
      this.chartColors = [
        {
          backgroundColor: ["#ffc107"],
          borderColor: '#ffffff',
          pointBorderColor: '#fff',
        }];

      this.barChartData = [
        { data: [this.assetAccumulation, 53, 84, 23, 47, 63, 45, 23, 45, this.assetIn10], label: 'Investments mit Immobilie' }
      ];
    }
  }

  nextNBack(step: string) {
    console.log(this.stepNumber);
    if (step == "next" && this.stepNumber < 6) {
      this.stepNumber = this.stepNumber + 1;
    }

    if (step == "back" && this.stepNumber > 1) {
      this.stepNumber = this.stepNumber - 1;
    }
  }

}
