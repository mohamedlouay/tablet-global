import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGlobalComponent } from './payment-global.component';

describe('PaymentComponent', () => {
  let component: PaymentGlobalComponent;
  let fixture: ComponentFixture<PaymentGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
