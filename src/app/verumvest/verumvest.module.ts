import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { VerumvestRoutingModule } from './verumvest-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { InfoFlowComponent } from './info-flow/info-flow.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalculatorComponent,
    FooterComponent,
    InfoFlowComponent
  ],
  imports: [
    CommonModule,
    VerumvestRoutingModule,
    FormsModule,
    ChartsModule
  ]
})
export class VerumvestModule { }
