import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksCodeComponent } from './stocks-code.component';

describe('StocksCodeComponent', () => {
  let component: StocksCodeComponent;
  let fixture: ComponentFixture<StocksCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocksCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
