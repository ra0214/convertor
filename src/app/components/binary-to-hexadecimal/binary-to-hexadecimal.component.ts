import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-binary-to-hexadecimal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent],
  templateUrl: './binary-to-hexadecimal.component.html',
  styleUrls: ['./binary-to-hexadecimal.component.css'],
})
export class BinaryToHexadecimalComponent {
  binaryControl = new FormControl('');
  get hexadecimal(): string {
    return this.binaryControl.value
      ? parseInt(this.binaryControl.value, 2).toString(16)
      : '';
  }
}
