import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToBinaryComponent } from './text-to-binary.component';

describe('TextToBinaryComponent', () => {
  let component: TextToBinaryComponent;
  let fixture: ComponentFixture<TextToBinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextToBinaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextToBinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
