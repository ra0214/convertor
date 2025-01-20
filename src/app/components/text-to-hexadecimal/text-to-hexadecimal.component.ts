import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-text-to-hexadecimal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent],
  templateUrl: './text-to-hexadecimal.component.html',
  styleUrls: ['./text-to-hexadecimal.component.css'],
})

export class TextToHexadecimalComponent {
  textControl = new FormControl('');
  get hexadecimal(): string {
    return this.textControl.value
      ? Array.from(this.textControl.value)
          .map((char) => char.charCodeAt(0).toString(16))
          .join(' ')
      : '';
  }
}
