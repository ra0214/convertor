import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-number-to-binary',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent],
  templateUrl: './number-to-binary.component.html',
  styleUrls: ['./number-to-binary.component.css'],
})
export class NumberToBinaryComponent {
  numberControl = new FormControl('');
  get binary(): string {
    return this.numberControl.value
      ? Number(this.numberControl.value).toString(2)
      : '';
  }
}
