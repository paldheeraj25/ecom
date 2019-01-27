import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerumvestRoutingModule } from './verumvest-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    VerumvestRoutingModule
  ]
})
export class VerumvestModule { }
