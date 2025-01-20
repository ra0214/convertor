import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-hexadecimal-to-binary',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent],
  templateUrl: './hexadecimal-to-binary.component.html',
  styleUrls: ['./hexadecimal-to-binary.component.css'],
})
export class HexadecimalToBinaryComponent {
  hexControl = new FormControl('');
  get binary(): string {
    return this.hexControl.value
      ? parseInt(this.hexControl.value, 16).toString(2)
      : '';
  }
}
