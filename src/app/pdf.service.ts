import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private httpClient: HttpClient) { }

  public pdfUrl: string = "https://verumvest-api.guwa-design.com/pdf/123/create";
  public assetAccumulation: number;
  public pdfObject1: any;
  public pdfObject: any = {

    "userFirstName": {
      "type": "string",
      "value": "Maxi"
    },
    "userLastName": {
      "type": "string",
      "value": "Musterfrau"
    },
    "userEmail": {
      "type": "string",
      "value": "maxi@muster.de"
    },
    "userPhone": {
      "type": "string",
      "value": "0049 1234567891"
    },
    "userAge": {
      "type": "number",
      "value": 24
    },
    "userGender": {
      "type": "string",
      "value": "f"
    },
    "family_status": {
      "type": "string",
      "value": "Single"
    },
    "children": {
      "type": "number",
      "value": 0
    },
    "house_count": {
      "type": "number",
      "value": 4
    },
    "risk": {
      "type": "string",
      "value": "Low"
    },
    "inv_ang_neto": {
      "type": "number",
      "value": 1
    },
    "inv_ang_inve": {
      "type": "number",
      "value": 2
    },
    "inv_ang_wuns": {
      "type": "number",
      "value": 3
    },
    "diagram_tl": {
      "type": "number",
      "value": 420.54
    },
    "diagram_immo": {
      "type": "number",
      "value": 410.54
    },
    "diagram_aktien": {
      "type": "number",
      "value": 406.41
    },
    "diagram_zinsen": {
      "type": "number",
      "value": 394.54
    },
    "wie_wohnflache": {
      "type": "number",
      "value": 11
    },
    "wohnflache": {
      "type": "number",
      "value": 12
    },
    "house_type": {
      "type": "string",
      "value": "Dome"
    },
    "equity": {
      "type": "number",
      "value": 13
    },
    "er_neb": {
      "type": "number",
      "value": 14
    },
    "ein_zur": {
      "type": "number",
      "value": 15
    },
    "finanzierung": {
      "type": "number",
      "value": 16
    },
    "ka_moglich": {
      "type": "number",
      "value": 17
    },
    "kaufpreis_gesamt": {
      "type": "number",
      "value": 18
    },
    "finanz_1": {
      "type": "number",
      "value": 19
    },
    "finanz_2": {
      "type": "number",
      "value": 20
    },
    "bank": {
      "type": "number",
      "value": 21
    },
    "nebenkosten": {
      "type": "number",
      "value": 22
    },
    "ausgaben_1": {
      "type": "number",
      "value": 23
    },
    "tilgung": {
      "type": "number",
      "value": 24
    },
    "ausgaben_je_monat": {
      "type": "number",
      "value": 25
    },
    "investition": {
      "type": "number",
      "value": 26
    },
    "steuervorteil": {
      "type": "number",
      "value": 27
    },
    "einnahmen": {
      "type": "number",
      "value": 28
    },
    "ausgaben_2": {
      "type": "number",
      "value": 29
    },
    "aufwandsrechner": {
      "type": "number",
      "value": 30
    },
    "tilgung_2": {
      "type": "number",
      "value": 31
    },
    "tilgung_3": {
      "type": "number",
      "value": 32
    },
    "tilgung_1": {
      "type": "number",
      "value": 33
    },
    "userTown": {
      "type": "string",
      "value": "Berlin"
    },
    "userState": {
      "type": "string",
      "value": "Berling Brandenburg"
    }
  }


  generateCalculation() {
    this.pdfObject.er_neb.value = (this.assetAccumulation / 0.27) * 0.07;
    this.pdfObject.ein_zur.value = (this.assetAccumulation / 0.27) * 0.2;
    this.pdfObject.finanzierung.value = (this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2);
    this.pdfObject.ka_moglich.value = this.assetAccumulation / 0.27;
    this.pdfObject.wohnflache.value = (this.assetAccumulation / 0.27) / 2700;
    this.pdfObject.wie_wohnflache.value = ((this.assetAccumulation / 0.27) / 2700) / 75;
    this.pdfObject.investition.value = ((this.assetAccumulation / 0.27) * 0.04) / 12;
    this.pdfObject.einnahmen.value = ((this.assetAccumulation / 0.27) * 0.04) / 12;
    this.pdfObject.finanz_1.value = (((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
      0.02) / 12;

    this.pdfObject.finanz_2.value = (((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
      0.02) / 12;

    // this.pdfObject.aufwand.value = (((this.assetAccumulation / 0.27) / 2700) / 75) * 36;
    // this.pdfObject.belastung.value = (this.assetAccumulation / 0.27) * 0.002 / 12;
    this.pdfObject.ausgaben_1.value = ((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
      0.02) / 12) + ((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
        0.02) / 12) + ((((this.assetAccumulation / 0.27) / 2700) / 75) * 36) + ((this.assetAccumulation / 0.27)
          * 0.002 / 12);

    this.pdfObject.ausgaben_2.value = (((this.assetAccumulation / 0.27) * 0.04) / 12) -
      (((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
        0.02) / 12) + ((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
          0.02) / 12) + ((((this.assetAccumulation / 0.27) / 2700) / 75) * 36) + ((this.assetAccumulation / 0.27)
            * 0.002 / 12));

    this.pdfObject.tilgung_1.value = 99999999999999999;
    this.pdfObject.tilgung_2.value = Math.pow(1.03, 10) * (this.assetAccumulation / 0.27);
    this.pdfObject.tilgung_3.value = 99999999999999999;
    this.pdfObject.aufwandsrechner.value = this.assetAccumulation - ((((this.assetAccumulation /
      0.27) * 0.04) / 12) -
      (((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
        0.02) / 12) + ((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
          0.02) / 12) + ((((this.assetAccumulation / 0.27) / 2700) / 75) * 36) + ((this.assetAccumulation /
            0.27)
            * 0.002 / 12))) * 12 * 10;


  }

  getPdf(equity: number, user: any) {
    this.assetAccumulation = equity;
    this.generateCalculation();
    // user details
    this.pdfObject.userFirstName.value = user.firstName;
    this.pdfObject.userLastName.value = user.lastName;
    this.pdfObject.userEmail.value = user.email;
    this.pdfObject.userPhone.value = user.teleNumber;
    this.pdfObject.userTown.value = user.email;



    // fulfilling the pdfObject
    // this.pdfObject1.equity = this.pdfObject.equity;
    // this.pdfObject1.aufwandsrechner = this.pdfObject.aufwandsrechner;
    // this.pdfObject1.ausgaben_1 = this.pdfObject.ausgaben_1;
    // this.pdfObject1.ausgaben_2 = this.pdfObject.ausgaben_2;
    // this.pdfObject1.wie_wohnflache = this.pdfObject.wie_wohnflache;
    // this.pdfObject1.wohnflache = this.pdfObject.wohnflache;
    // this.pdfObject1.equity = this.pdfObject1.equity
    // this.pdfObject1.finanzierung = this.pdfObject.finanzierung;
    // this.pdfObject1.er_neb = this.pdfObject.er_neb;
    // this.pdfObject1.ka_moglich = this.pdfObject.ka_moglich;
    // this.pdfObject1.finanz_1 = this.pdfObject.finanz_1;
    // this.pdfObject1.finanz_2 = this.pdfObject.finanz_2;
    // this.pdfObject1.tilgung_1 = this.pdfObject.tilgung_1;
    // this.pdfObject1.tilgung_2 = this.pdfObject.tilgung_2;
    // this.pdfObject1.tilgung_3 = this.pdfObject.tilgung_3;
    // this.pdfObject1.investition = this.pdfObject.investition;
    // this.pdfObject1.einnahmen = this.pdfObject.einnahmen;
    this.pdfObject.risk.value = user.riskTaker;
    this.pdfObject.inv_ang_neto.value = 1;//"3rd screen 1st field";
    this.pdfObject.inv_ang_inve.value = 1;// "3rd screen third field";
    this.pdfObject.inv_ang_wuns.value = 1;//"3rd screen first field";

    console.log("pdf service " + equity);
    this.httpClient.post(this.pdfUrl, { key: "Xgz3oNOYLkfHUs1sDxtpcqRhiVfKWOOqTd1MUZe", data: this.pdfObject }).subscribe((res) => {
      console.log(res);
    });
  }

}
