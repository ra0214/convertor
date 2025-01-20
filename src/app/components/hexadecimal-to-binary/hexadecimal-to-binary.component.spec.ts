import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexadecimalToBinaryComponent } from './hexadecimal-to-binary.component';

describe('HexadecimalToBinaryComponent', () => {
  let component: HexadecimalToBinaryComponent;
  let fixture: ComponentFixture<HexadecimalToBinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexadecimalToBinaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexadecimalToBinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
