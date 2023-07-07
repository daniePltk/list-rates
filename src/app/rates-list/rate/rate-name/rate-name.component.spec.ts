import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateNameComponent } from './rate-name.component';

describe('RateNameComponent', () => {
  let component: RateNameComponent;
  let fixture: ComponentFixture<RateNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
