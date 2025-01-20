import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-text-to-binary',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent],
  templateUrl: './text-to-binary.component.html',
  styleUrls: ['./text-to-binary.component.css'],
})
export class TextToBinaryComponent {
  textControl = new FormControl('');
  get binary(): string {
    return this.textControl.value
      ? Array.from(this.textControl.value)
          .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
          .join(' ')
      : '';
  }
}
