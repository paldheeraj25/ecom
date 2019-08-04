import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CalculatService } from "../calculat.service";
import { PdfService } from "../../pdf.service";

@Component({
  selector: "app-info-flow",
  templateUrl: "./info-flow.component.html",
  styleUrls: ["./info-flow.component.scss"]
})
export class InfoFlowComponent implements OnInit {
  //flag url
  swissFlagUrl: string = "assets/img/swissfmap.jpg";
  germanFlagUrl = "assets/img/germanyfmap.jpg";
  stepNumber: number = 1;
  // step one var
  step1elem1: string = "20-30";
  step1elem2: string = "30-40-1";
  step1elem3: string = "20-40-2";
  next: string = "next";
  back: string = "back";
  currency: string = "";

  // step two var
  step2FamilyStand: string;
  ageRange: string;
  kids: string;
  investExperience: string;
  risikobereitschaft: string;

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
  public barChartLabels = [
    "2019",
    "2020",
    "2021",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029"
  ];
  public barChartType = "line";
  public barChartLegend = true;

  public barChartData = [];
  public chartColors: any[] = [];

  //step-5 variables
  public capitalEmployed: number = 0;
  public maximumDebt: number = 0;
  public affordProperty: number = 0;

  public getPower: number;
  public user: any = {};

  // pdf data
  public data: any = {
    userFirstName: {
      type: "string",
      value: "Maxi"
    },
    userLastName: {
      type: "string",
      value: "Musterfrau"
    },
    userEmail: {
      type: "string",
      value: "maxi@muster.de"
    },
    userPhone: {
      type: "string",
      value: "0049 1234567891"
    },
    userAge: {
      type: "number",
      value: 24
    },
    userGender: {
      type: "string",
      value: "f"
    },
    family_status: {
      type: "string",
      value: "Single"
    },
    children: {
      type: "number",
      value: 0
    },
    house_count: {
      type: "number",
      value: 4
    },
    risk: {
      type: "string",
      value: "Low"
    },
    inv_ang_neto: {
      type: "number",
      value: 1
    },
    inv_ang_inve: { // investment third slider
      type: "number",
      value: 2
    },
    inv_ang_wuns: {
      type: "number",
      value: 3
    },
    diagram_tl: {
      type: "number",
      value: 420.54
    },
    diagram_immo: {
      type: "number",
      value: 410.54
    },
    diagram_aktien: {
      type: "number",
      value: 406.41
    },
    diagram_zinsen: {
      type: "number",
      value: 394.54
    },
    wie_wohnflache: {
      type: "number",
      value: 11
    },
    wohnflache: {
      type: "number",
      value: 12
    },
    house_type: {
      type: "string",
      value: "Dome"
    },
    equity: {
      type: "number",
      value: 13
    },
    er_neb: {
      type: "number",
      value: 14
    },
    ein_zur: {
      type: "number",
      value: 15
    },
    finanzierung: {
      type: "number",
      value: 16
    },
    ka_moglich: {
      type: "number",
      value: 17
    },
    kaufpreis_gesamt: {
      type: "number",
      value: 18
    },
    finanz_1: {
      type: "number",
      value: 19
    },
    finanz_2: {
      type: "number",
      value: 20
    },
    bank: {
      type: "number",
      value: 21
    },
    nebenkosten: {
      type: "number",
      value: 22
    },
    ausgaben_1: {
      type: "number",
      value: 23
    },
    tilgung: {
      type: "number",
      value: 24
    },
    ausgaben_je_monat: {
      type: "number",
      value: 25
    },
    investition: {
      type: "number",
      value: 26
    },
    steuervorteil: {
      type: "number",
      value: 27
    },
    einnahmen: {
      type: "number",
      value: 28
    },
    ausgaben_2: {
      type: "number",
      value: 29
    },
    aufwandsrechner: {
      type: "number",
      value: 30
    },
    tilgung_2: {
      type: "number",
      value: 31
    },
    tilgung_3: {
      type: "number",
      value: 32
    },
    tilgung_1: {
      type: "number",
      value: 33
    },
    userTown: {
      type: "string",
      value: "Berlin"
    },
    userState: {
      type: "string",
      value: "Berling Brandenburg"
    }
  };
  formData: any = {};

  constructor(
    private router: Router,
    private calculatSerrvice: CalculatService,
    private pdfService: PdfService
  ) { }

  ngOnInit() {
    this.getPower = Math.pow(1.03, 10);
    this.formData = {
      maritalStatus: "single",
      age: "20-35",
      children: "keine",
      realEstateExp: "0",
      riskTaker: "Nein",
      reservesToday: 100000,
      desiredProperty: 500000,
      spend: 0,
      gender: 1,
      firstName: "",
      lastName: "",
      email: "",
      teleNumber: "",
      acceptCond: false
    };
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
    this.prepareGraph();
  }

  showGraphType(graphType: string) {
    if (graphType === "sparenZinsen") {
      this.graphDataCalculator(-0.02);
    } else if (graphType === "investmentsAktien") {
      this.graphDataCalculator(7.8);
    } else if (graphType === "investmentsImmobilien") {
      console.log(this.calculatSerrvice.currency);
      if (this.calculatSerrvice.currency == "swiss") {
        this.graphDataCalculator(9.69);
      } else {
        this.graphDataCalculator(12.56);
      }
    }
  }

  nextNBack(step: string) {
    // this.prepareGraph();

    if (step == "next" && this.stepNumber < 5) {
      this.stepNumber = this.stepNumber + 1;
    }

    if (step == "back" && this.stepNumber > 1) {
      this.stepNumber = this.stepNumber - 1;
    }
  }

  prepareGraph() {
    this.graphDataCalculator(-0.0002);
  }

  graphDataCalculator(intrestRate: number) {
    this.assetAccumulation;
    let graphData = [];
    // 0 to 10 years
    graphData.push(this.assetAccumulation);
    for (let i = 0; i < 10; i++) {
      let yearlyPricipal = graphData[0] * intrestRate + graphData[i];
      graphData.push(yearlyPricipal);
    }
    this.barChartData = [
      {
        data: graphData
      },
      {
        data: [
          this.assetIn10,
          this.assetIn10,
          this.assetIn10,
          this.assetIn10,
          this.assetIn10,
          this.assetIn10,
          this.assetIn10,
          this.assetIn10,
          this.assetIn10,
          this.assetIn10
        ],
        label: "10 Jahren"
      }
    ];
  }

  changeModel() {
    this.maximumDebt = this.capitalEmployed * 9;
    this.affordProperty = (this.maximumDebt + this.capitalEmployed) * 0.17;
  }

  getPdf() {
    // populating the data for the pdf generation
    // this.data.userFirstName.value = "user Name";
    // this.data.userLastName = "user Name";
    // this.data.userEmail = "user Name";
    // this.data.userPhone = 192131239812;
    // this.data.userAge = "age";
    // this.data.userGender = "gender";
    // this.data.family_status = "family_status";
    // this.data.children = "children";
    // this.data.house_count = "house_count";
    // this.data.risk = "risk";
    // this.data.userTown.value = "Berlin";
    if (this.formData.gender == 1) {
      this.formData.gender = "f";
    } else {
      this.formData.gender = "m";
    }
    // generating graph data
    let diagram_aktien = 0;
    for (let i = 0; i < 10; i++) {
      diagram_aktien = this.assetAccumulation * (-0.02) + this.assetAccumulation;
    }

    let diagram_zinsen = 0;
    for (let i = 0; i < 10; i++) {
      diagram_zinsen = this.assetAccumulation * (7.8) + this.assetAccumulation;
    }

    let diagram_immo = 0;
    for (let i = 0; i < 10; i++) {
      diagram_immo = this.assetAccumulation * (9.69) + this.assetAccumulation;
    }
    this.formData.diagram_zinsen = diagram_zinsen;
    this.formData.diagram_aktien = diagram_aktien;
    this.formData.diagram_immo = diagram_immo;
    ////////
    this.pdfService.getPdf(this.formData.reservesToday, this.formData);
    this.nextNBack("next");
    console.log("getPDF controller " + this.assetAccumulation);
  }

  swissFlag(flag) {
    if (flag == 1) {
      this.swissFlagUrl = "assets/img/swissfmap1.jpg";
    } else {
      this.swissFlagUrl = "assets/img/swissfmap.jpg";
    }
  }

  germanFlag(flag) {
    if (flag == 1) {
      this.germanFlagUrl = "assets/img/germanyfmap1.jpg";
    } else {
      this.germanFlagUrl = "assets/img/germanyfmap.jpg";
    }
  }

  chooseCountry(currency: string) {
    this.currency = currency;
    this.nextNBack('next');
  }
}
