import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private httpClient: HttpClient) { }

  public pdfUrl: string = "https://verumvest-api.guwa-design.com/pdf/123/create";
  private nLtter: string = "https://api.newsletter2go.com/oauth/v2/token";
  private nLettterSend: string = "https://api.newsletter2go.com/newsletters/wuazzq83/sendtest";
  private recipientUrl: string = "https://api.newsletter2go.com/recipients";
  private newsTk: string;

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
      "type": "number", // its a string
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
      "type": "number", // its a string
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
    "inv_ang_neto": { // field number 1 in the doc .. Done
      "type": "number",
      "value": 1
    },
    "inv_ang_inve": { // field number two .. Done
      "type": "number",
      "value": 2
    },
    "inv_ang_wuns": { // field number and green number in the box .. Done
      "type": "number",
      "value": 3
    },
    "diagram_tl": { // same as field number three slider .. Done
      "type": "number",
      "value": 420.54
    },
    "diagram_immo": { // 3rd
      "type": "number",
      "value": 410.54
    },
    "diagram_aktien": { // 2nd graph
      "type": "number",
      "value": 406.41
    },
    "diagram_zinsen": { // 1 graph
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

  roundNumber(number: number) {
    return Math.round(number * 100) / 100;
  }

  generateCalculation() {
    this.pdfObject.er_neb.value = this.roundNumber((this.assetAccumulation / 0.27) * 0.07);
    this.pdfObject.ein_zur.value = this.roundNumber((this.assetAccumulation / 0.27) * 0.2);
    this.pdfObject.finanzierung.value = this.roundNumber((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2));
    this.pdfObject.ka_moglich.value = this.roundNumber(this.assetAccumulation / 0.27);
    this.pdfObject.wohnflache.value = this.roundNumber((this.assetAccumulation / 0.27) / 2700);
    this.pdfObject.wie_wohnflache.value = this.roundNumber(((this.assetAccumulation / 0.27) / 2700) / 75);
    this.pdfObject.investition.value = this.roundNumber(((this.assetAccumulation / 0.27) * 0.04) / 12);
    this.pdfObject.finanz_1.value = this.roundNumber((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
      0.02) / 12);

    this.pdfObject.finanz_2.value = this.roundNumber((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
      0.02) / 12);
    // bank
    this.pdfObject.bank.value = this.roundNumber(this.pdfObject.finanz_1.value);
    // kaufpreis_gesamt
    this.pdfObject.kaufpreis_gesamt.value = this.roundNumber(this.assetAccumulation / 0.27);

    //steuervorteil
    this.pdfObject.steuervorteil.value = this.roundNumber((this.pdfObject.kaufpreis_gesamt.value * 0.002) / 12);
    this.pdfObject.einnahmen.value = this.pdfObject.investition.value - this.pdfObject.steuervorteil.value;
    // this.pdfObject.aufwand.value = (((this.assetAccumulation / 0.27) / 2700) / 75) * 36;
    // this.pdfObject.belastung.value = (this.assetAccumulation / 0.27) * 0.002 / 12;
    // this.pdfObject.ausgaben_1.value = this.roundNumber(((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
    //   0.02) / 12) + ((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
    //     0.02) / 12) + ((((this.assetAccumulation / 0.27) / 2700) / 75) * 36) + ((this.assetAccumulation / 0.27)
    //       * 0.002 / 12));

    // this.pdfObject.ausgaben_2.value = this.roundNumber((((this.assetAccumulation / 0.27) * 0.04) / 12) -
    //   (((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
    //     0.02) / 12) + ((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
    //       0.02) / 12) + ((((this.assetAccumulation / 0.27) / 2700) / 75) * 36) + ((this.assetAccumulation / 0.27)
    //         * 0.002 / 12)));
    this.pdfObject.ausgaben_1.value = this.roundNumber(this.pdfObject.finanz_1.value + (((this.pdfObject.ka_moglich.value / 2700) / 75) * 36));
    //ausgaben_je_monat
    this.pdfObject.ausgaben_je_monat.value = this.roundNumber(this.pdfObject.finanz_1.value + this.pdfObject.finanz_2.value + (((this.pdfObject.ka_moglich.value / 2700) / 75) * 36));
    this.pdfObject.ausgaben_2.value = this.pdfObject.einnahmen.value;
    //nebenkosten
    this.pdfObject.nebenkosten.value = this.roundNumber(((this.pdfObject.ka_moglich.value / 2700) / 75) * 36);
    this.pdfObject.tilgung.value = this.pdfObject.finanz_2.value;

    this.pdfObject.tilgung_2.value = this.roundNumber(Math.pow(1.03, 10) * (this.assetAccumulation / 0.27));
    //this.pdfObject.tilgung_3.value = 99;
    // this.pdfObject.aufwandsrechner.value = this.roundNumber(this.assetAccumulation - ((((this.assetAccumulation /
    //   0.27) * 0.04) / 12) -
    //   (((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
    //     0.02) / 12) + ((((this.assetAccumulation / 0.27) - ((this.assetAccumulation / 0.27) * 0.2)) *
    //       0.02) / 12) + ((((this.assetAccumulation / 0.27) / 2700) / 75) * 36) + ((this.assetAccumulation /
    //         0.27)
    //         * 0.002 / 12))) * 12 * 10);
    this.pdfObject.aufwandsrechner.value = this.pdfObject.ka_moglich.value;

    // for bel_pro_monat = (0.02 + 0.02) * finanzierung / 12
    var bel_pro_monat = this.roundNumber((0.02 + 0.02) * this.pdfObject.finanzierung.value / 12);
    var initialMonth = this.roundNumber(this.pdfObject.finanzierung.value);
    var zins = this.roundNumber(initialMonth * 0.02 / 12);
    var til = bel_pro_monat - zins;

    for (let i = 0; i < 120; i++) {
      initialMonth = this.roundNumber(initialMonth - til);
      zins = this.roundNumber(initialMonth * 0.02 / 12);
      til = this.roundNumber(bel_pro_monat - zins);
    }
    console.log(bel_pro_monat);
    console.log(initialMonth);
    console.log(zins);
    console.log(til);

    // til_1
    this.pdfObject.tilgung_1.value = this.roundNumber((this.pdfObject.ka_moglich.value * Math.pow(1.03, 10)) - initialMonth);
    //this.pdfObject.tilgung_3.value = 99;

    // this.pdfObject.tilgung_3.value = this.pdfObject.inv_ang_neto.value //b9
    //   - ((this.pdfObject.ka_moglich.value * 0.04 / 12) - //
    //     (this.pdfObject.finanz_1.value + this.pdfObject.finanz_2.value +
    //       // adding after finanz_2
    //       (36 * ((this.pdfObject.ka_moglich.value / 2700) / 75))) +
    //     // next number
    //     (this.pdfObject.ka_moglich.value * 0.002 / 12)
    //   )

    var b24 = (this.pdfObject.ka_moglich.value * 0.04) / 12;
    var b29 = this.pdfObject.finanz_1.value + this.pdfObject.finanz_2.value +
      (36 * ((this.pdfObject.ka_moglich.value / 2700) / 75)) +
      (this.pdfObject.ka_moglich.value * 0.002 / 12);
    console.log('b24 - b29');

    var b31 = this.roundNumber(b24 - b29);
    // console.log(b31);
    // console.log(this.pdfObject.inv_ang_neto.value);
    this.pdfObject.tilgung_3.value = (this.assetAccumulation) - (b31 * 12 * 10);

    // graphs 
    //diagram_zinsen

    for (let i = 0; i < 10; i++) {
      this.pdfObject.diagram_zinsen.value = this.assetAccumulation - this.assetAccumulation * (0.02);
    }

    for (let i = 0; i < 10; i++) {
      this.pdfObject.diagram_aktien.value = this.assetAccumulation + this.assetAccumulation * (7.8);
    }

    for (let i = 0; i < 10; i++) {
      this.pdfObject.diagram_immo.value = this.assetAccumulation + this.assetAccumulation * (9.69);
    }

  }

  // login service
  newsletter(email) {
    // http headers 
    let httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Basic M2xkNW1leXJfWHpKN0gwX3RmS1Y2Ql9tZ2lNaEQ1al9INGVDcTNKVUhIOmw4cG01Z3R2' });
    let options = { headers: httpHeaders };
    let nletterBody = {
      "username": "office@verumvest.com",
      "password": "dH44=Y<G",
      "grant_type": "https://nl2go.com/jwt"
    }
    // getting token
    this.httpClient.post(this.nLtter, nletterBody, options).subscribe((res) => {

      let auth = "Bearer " + res['access_token'];
      let httpHeadersEmail = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': auth });
      let optionsemail = { headers: httpHeadersEmail };
      console.log(email);
      // creating recipient
      let recipientObject = {
        "list_id": "5ghti2nb",
        "email": email,
        "phone": "+49123456789",
        "gender": "m",
        "first_name": "Dheeraj",
        "last_name": "Pal",
        "is_unsubscribed": false,
        "is_blacklisted": false,
        "pdf_link": "this is yes link"
      }
      // saving the recipient

      this.httpClient.post(this.recipientUrl, recipientObject, optionsemail).subscribe((resSave) => {
        console.log(resSave);
        let nletterEmailBody = {
          "contexts": [
            {
              "recipient": {
                "email": email
              }
            }
          ]
        }
        // send email
        this.httpClient.post(this.nLettterSend, nletterEmailBody, optionsemail).subscribe((resEmail) => {
          console.log(resEmail);
        });
      });
      // this.newsTk = res['access_token'];
      // let auth = "Bearer " + this.newsTk;
      // let httpHeadersEmail = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': auth });
      // let optionsemail = { headers: httpHeadersEmail };


    });
  }



  getPdf(equity: number, user: any) {

    //console.log(roundTo(1.234, 2));
    console.log(user);
    // newsletter data

    this.assetAccumulation = equity;
    this.generateCalculation();
    // user details
    this.pdfObject.userFirstName.value = user.firstName;
    this.pdfObject.userLastName.value = user.lastName;
    this.pdfObject.userEmail.value = user.email;
    this.pdfObject.userPhone.value = user.teleNumber;
    this.pdfObject.userTown.value = user.email;
    this.pdfObject.userGender.value = user.gender;
    this.pdfObject.family_status.value = user.maritalStatus;



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
    this.pdfObject.inv_ang_neto.value = equity;//"3rd screen 1st field";
    this.pdfObject.inv_ang_inve.value = user.desiredProperty;// "3rd screen third field";
    this.pdfObject.inv_ang_wuns.value = user.desiredProperty;//"3rd screen first field";
    this.pdfObject.diagram_tl.value = user.desiredProperty; // third screen
    this.pdfObject.equity.value = equity;

    //graph
    // this.pdfObject.diagram_zinsen.value = user.diagram_zinsen;
    // this.pdfObject.diagram_aktien.value = user.diagram_aktien;
    // this.pdfObject.diagram_immo.value = user.diagram_immo;

    console.log("pdf service " + equity);
    console.log(this.pdfObject);
    this.httpClient.post(this.pdfUrl, { key: "Xgz3oNOYLkfHUs1sDxtpcqRhiVfKWOOqTd1MUZe", data: this.pdfObject }).subscribe((res) => {
      console.log(res);
      this.newsletter(user.email);
    });
  }

}
