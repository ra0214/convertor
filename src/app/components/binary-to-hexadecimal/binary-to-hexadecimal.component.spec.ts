import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryToHexadecimalComponent } from './binary-to-hexadecimal.component';

describe('BinaryToHexadecimalComponent', () => {
  let component: BinaryToHexadecimalComponent;
  let fixture: ComponentFixture<BinaryToHexadecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaryToHexadecimalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinaryToHexadecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
