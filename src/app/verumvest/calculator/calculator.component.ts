import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Router } from '@angular/router';
import { CalculatService } from '../calculat.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(private router: Router, private calculatService: CalculatService) { }

  ngOnInit() {
  }

  removeFooter() {

  }

  goToInfoFlow(currency: string): void {
    this.calculatService.currency = currency;
    this.router.navigate(['/calculator/info']);
  }
}
