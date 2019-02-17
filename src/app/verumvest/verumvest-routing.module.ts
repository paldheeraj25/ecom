import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { InfoFlowComponent } from './info-flow/info-flow.component';

const routes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'info', component: InfoFlowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerumvestRoutingModule { }
