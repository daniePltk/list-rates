import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePriceComponent } from './rate-price.component';

describe('RatePriceComponent', () => {
  let component: RatePriceComponent;
  let fixture: ComponentFixture<RatePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
