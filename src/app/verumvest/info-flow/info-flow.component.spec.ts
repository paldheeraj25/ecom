import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFlowComponent } from './info-flow.component';

describe('InfoFlowComponent', () => {
  let component: InfoFlowComponent;
  let fixture: ComponentFixture<InfoFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
