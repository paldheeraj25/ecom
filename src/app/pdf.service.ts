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
    equity: {
      label: "Was würdest Du heute für Deinen Vermögensaufbau investieren",
      value: 100,
      type: "number"
    },
    er_neb: {
      label: "Erwerbs Nebenkosten",
      value: 100,
      type: "number"
    },
    ein: {
      label: "Eigenkapital zur Immobilie",
      value: 100,
      type: "number"
    },
    finanzierung: {
      label: "Finanzierung",
      value: 100,
      type: "number"
    },
    ka_moglich: {
      label: "Kaufpreis möglich",
      value: 100,
      type: "number"
    },
    wohnflache: {
      label: "Wie viel m² Wohnfläche kann gekauft werden",
      value: 100,
      type: "number"
    },
    wie_wohnflache: {
      label: "Wie viele Wohnungen sind das?",
      value: 100,
      type: "number"
    },
    investition: {
      label: "Miete mtl. aus der Investition?",
      value: 100,
      type: "number"
    },
    einnahmen: {
      label: "Summe Einnahmen?",
      value: 100,
      type: "number"
    },
    finanz_1: {
      label: "Finanzierungszins",
      value: 100,
      type: "number"
    },
    finanz_2: {
      label: "Finanzierungstilgung",
      value: 100,
      type: "number"
    },
    aufwand: {
      label: "Aufwand Verwaltung",
      value: 100,
      type: "number"
    },
    belastung: {
      label: "Steuerliche Belastung",
      value: 100,
      type: "number"
    },
    ausgaben_1: {
      label: "Summe Ausgaben",
      value: 100,
      type: "number"
    },
    ausgaben_2: {
      label: "Ergebnis Einnahmen - Ausgaben",
      value: 100,
      type: "number"
    },
    tilgung_1: {
      label: "Tilgung bei den Vorgaben nach 10 Jahren",
      value: 100,
      type: "number"
    },
    tilgung_2: {
      label: "Immobilienwert nach 10 Jahren bei",
      value: 100,
      type: "number"
    },
    tilgung_3: {
      label: "Guthabendelta nach 10 Jahren daraus",
      value: 100,
      type: "number"
    },
    aufwandsrechner: {
      label: "Aufwandsrechner innerhalb von 10 Jahren",
      value: 100,
      type: "number"
    },
    investment_angaben: {
      label: "Investment Angaben",
      value: 100,
      type: "number"

    },
    vergleich_verschiedener: {
      label: "vergleich verschiedener",
      value: 100,
      type: "number"

    },
    kaufpreis_gesamt: {
      label: "Kaufpreis Gesamt",
      value: 100,
      type: "number"

    },
    bank: {
      label: "Bank",
      value: 100,
      type: "number"

    },
    nebenkosten: {
      label: "Nebenkosten",
      value: 100,
      type: "number"

    },
    tilgung: {
      label: "Tilgung",
      value: 100,
      type: "number"

    },
    ausgaben_je_monat: {
      label: "Ausgaben je Monat",
      value: 100,
      type: "number"

    },
    steuervorteil: {
      label: "Steuervorteil",
      value: 100,
      type: "number"

    },
    inv_ang_neto: {
      label: "inv_ang_neto",
      value: 100,
      type: "number"

    },
    inv_ang_inve: {
      label: "inv_ang_inve",
      value: 100,
      type: "number"

    },
    inv_ang_wuns: {
      label: "inv_ang_wuns",
      value: 100,
      type: "number"

    },
    diagram_tl: {
      label: "diagram_tl",
      value: 100,
      type: "number"

    },
    diagram_immo: {
      label: "diagram_immo",
      value: 100,
      type: "number"

    },
    diagram_aktien: {
      label: "diagram_aktien",
      value: 100,
      type: "number"

    },
    diagram_zinsen: {
      label: "diagram_zinsen",
      value: 100,
      type: "number"

    },
    userTown: {
      label: "User Town",
      value: "some address",
      type: "string"
    },
    userState: {
      label: "User State",
      value: "some address",
      type: "string"
    },
    userFirstName: {
      label: "Name",
      value: "",
      type: "string"
    },
    userLastName: {
      label: "Name",
      value: "",
      type: "string"
    },
    userEmail: {
      label: "Email",
      value: "",
      type: "string"
    },
    userPhone: {
      label: "Phone",
      value: "",
      type: "string"
    },
    userAge: {
      label: "Age",
      value: 28,
      type: "number"
    },
    userGender: {
      label: "Gender",
      value: "",
      type: "string"
    },
    family_status: {
      label: "Family Status",
      value: "",
      type: "string"
    },
    children: {
      label: "Children",
      value: 0,
      type: "number"
    },
    risk: {
      label: "Risk",
      value: "",
      type: "string"
    },
    house_type: {
      label: "House Type",
      value: "",
      type: "string"
    },
    house_count: {
      label: "House Count",
      value: "",
      type: "string"
    }
  }

  generateCalculation() {
    this.pdfObject.er_neb.value = (this.assetAccumulation / 0.27) * 0.07;
    this.pdfObject.ein.value = (this.assetAccumulation / 0.27) * 0.2;
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

    this.pdfObject.aufwand.value = (((this.assetAccumulation / 0.27) / 2700) / 75) * 36;
    this.pdfObject.belastung.value = (this.assetAccumulation / 0.27) * 0.002 / 12;
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
    this.pdfObject.userFirstName.value = user.name;
    this.pdfObject.userLastName.value = user.name;
    this.pdfObject.userEmail.value = user.email;
    this.pdfObject.userPhone.value = user.phone;
    this.pdfObject.userTown.value = user.address;
    this.pdfObject1 = {

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
      "house_type": {
        "type": "string",
        "value": "Dome"
      },
      "kaufpreis_gesamt": {
        "type": "number",
        "value": 18
      },
      "bank": {
        "type": "number",
        "value": 21
      },
      "nebenkosten": {
        "type": "number",
        "value": 22
      },
      "tilgung": {
        "type": "number",
        "value": 24
      },
      "ausgaben_je_monat": {
        "type": "number",
        "value": 25
      },
      "steuervorteil": {
        "type": "number",
        "value": 27
      },
      "userTown": {
        "type": "string",
        "value": "Berlin"
      },
      "userState": {
        "type": "string",
        "value": "Berling Brandenburg"
      },
      "ein_zur": {
        "type": "number",
        "value": 15
      }
    }


    // fulfilling the pdfObject
    this.pdfObject1.equity = this.pdfObject.equity;
    this.pdfObject1.aufwandsrechner = this.pdfObject.aufwandsrechner;
    this.pdfObject1.ausgaben_1 = this.pdfObject.ausgaben_1;
    this.pdfObject1.ausgaben_2 = this.pdfObject.ausgaben_2;
    this.pdfObject1.wie_wohnflache = this.pdfObject.wie_wohnflache;
    this.pdfObject1.wohnflache = this.pdfObject.wohnflache;
    this.pdfObject1.equity = this.pdfObject1.equity
    this.pdfObject1.finanzierung = this.pdfObject.finanzierung;
    this.pdfObject1.er_neb = this.pdfObject.er_neb;
    this.pdfObject1.ka_moglich = this.pdfObject.ka_moglich;
    this.pdfObject1.finanz_1 = this.pdfObject.finanz_1;
    this.pdfObject1.finanz_2 = this.pdfObject.finanz_2;
    this.pdfObject1.tilgung_1 = this.pdfObject.tilgung_1;
    this.pdfObject1.tilgung_2 = this.pdfObject.tilgung_2;
    this.pdfObject1.tilgung_3 = this.pdfObject.tilgung_3;
    this.pdfObject1.investition = this.pdfObject.investition;
    this.pdfObject1.einnahmen = this.pdfObject.einnahmen;
    console.log("pdf service " + equity);
    this.httpClient.post(this.pdfUrl, { key: "Xgz3oNOYLkfHUs1sDxtpcqRhiVfKWOOqTd1MUZe", data: this.pdfObject1 }).subscribe((res) => {
      console.log(res);
    });
  }

}
