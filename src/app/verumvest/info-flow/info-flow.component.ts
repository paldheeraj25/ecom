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
  germanFlagUrl = "assets/img/germanyfmap.jpg"
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
    inv_ang_inve: {
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
  formData = {};

  constructor(
    private router: Router,
    private calculatSerrvice: CalculatService,
    private pdfService: PdfService
  ) { }

  ngOnInit() {
    console.log(this.calculatSerrvice.currency);
    this.getPower = Math.pow(1.03, 10);
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
      this.graphDataCalculator(-0.0002);
    } else if (graphType === "investmentsAktien") {
      this.graphDataCalculator(0.0818);
    } else if (graphType === "investmentsImmobilien") {
      console.log(this.calculatSerrvice.currency);
      if (this.calculatSerrvice.currency == "swiss") {
        this.graphDataCalculator(0.0969);
      } else {
        this.graphDataCalculator(0.1256);
      }
    }
  }

  nextNBack(step: string) {
    this.prepareGraph();

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
    this.data.userFirstName.value = this.user.name;
    this.data.userLastName = this.user.name;
    this.data.userEmail = this.user.email;
    this.data.userPhone = this.user.phone;
    this.data.userAge = "age";
    this.data.userGender = "gender";
    this.data.family_status = "family_status";
    this.data.children = "children";
    this.data.house_count = "house_count";
    this.data.risk = "risk";
    this.data.inv_ang_neto = this.user.email;
    this.data.inv_ang_inve = this.user.email;
    this.data.inv_ang_wuns = this.user.email;
    this.data.diagram_tl = this.user.email;
    this.data.diagram_immo = this.user.email;
    this.data.diagram_aktien = this.user.email;
    this.data.diagram_zinsen = this.user.email;
    this.data.wie_wohnflache = this.user.email;
    this.data.wohnflache = this.user.email;
    this.data.house_type = this.user.email;
    this.data.equity = this.user.email;
    this.data.er_neb = this.user.email;
    this.data.ein_zur = this.user.email;
    this.data.finanzierung = this.user.email;
    this.data.ka_moglich = this.user.email;
    this.data.kaufpreis_gesamt = this.user.email;
    this.data.finanz_1 = this.user.email;
    this.data.finanz_2 = this.user.email;
    this.data.ausgaben_1 = this.user.email;
    this.data.tilgung = this.user.email;
    this.data.ausgaben_je_monat = this.user.email;
    this.data.investition = this.user.email;
    this.data.steuervorteil = this.user.email;
    this.data.einnahmen = this.user.email;
    this.data.ausgaben_2 = this.user.email;
    this.data.aufwandsrechner = this.user.email;
    this.data.tilgung_2 = this.user.email;
    this.data.tilgung_3 = this.user.email;
    this.data.tilgung_1 = this.user.email;
    this.data.userTown.value = "Berlin";
    this.data.userState = this.user.email;
    ////////
    this.pdfService.getPdf(this.assetAccumulation, this.data);
    console.log("getPDF controller " + this.assetAccumulation);
  }

  swissFlag(flag) {
    if (flag == 1) {
      this.swissFlagUrl = "assets/img/swissfmap1.jpg"
    } else {
      this.swissFlagUrl = "assets/img/swissfmap.jpg";
    }

  }

  germanFlag(flag) {
    if (flag == 1) {
      this.germanFlagUrl = "assets/img/germanyfmap1.jpg"
    } else {
      this.germanFlagUrl = "assets/img/germanyfmap.jpg";
    }

  }
}
