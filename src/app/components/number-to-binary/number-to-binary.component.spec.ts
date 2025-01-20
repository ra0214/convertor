import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToBinaryComponent } from './number-to-binary.component';

describe('NumberToBinaryComponent', () => {
  let component: NumberToBinaryComponent;
  let fixture: ComponentFixture<NumberToBinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberToBinaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberToBinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
