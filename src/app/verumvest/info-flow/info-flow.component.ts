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

  // step two var
  step2FamilyStand: string;
  ageRange: string;
  kids: string;
  investExperience: string;

  public monthlyHouseHoldIncome: number = 0;
  public monthlyExpenses: number = 0;
  public reserveToday: number = 0;
  public assetAccumulation: number = 0;
  public assetIn10: number = 0;

  //graph for step-4
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: false
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [];

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
      { data: [this.assetAccumulation, 59, 80, 81, 56, 55, this.assetIn10], label: 'Sparen mit Zinsen' },
      { data: [this.assetAccumulation, 48, 40, 19, 86, 27, this.assetIn10], label: 'Investments mit Aktien' },
      { data: [this.assetAccumulation, 53, 84, 23, 47, 63, this.assetIn10], label: 'Investments mit Immobilie' }
    ];
  }

}
