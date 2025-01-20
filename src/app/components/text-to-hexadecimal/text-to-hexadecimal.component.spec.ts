import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToHexadecimalComponent } from './text-to-hexadecimal.component';

describe('TextToHexadecimalComponent', () => {
  let component: TextToHexadecimalComponent;
  let fixture: ComponentFixture<TextToHexadecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextToHexadecimalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextToHexadecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
