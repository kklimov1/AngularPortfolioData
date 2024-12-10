import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkCodeComponent } from './spark-code.component';

describe('SparkCodeComponent', () => {
  let component: SparkCodeComponent;
  let fixture: ComponentFixture<SparkCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparkCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparkCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
