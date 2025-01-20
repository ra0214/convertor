import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { TextToBinaryComponent } from './components/text-to-binary/text-to-binary.component';
import { TextToHexadecimalComponent } from './components/text-to-hexadecimal/text-to-hexadecimal.component';
import { NumberToBinaryComponent } from './components/number-to-binary/number-to-binary.component';
import { BinaryToHexadecimalComponent } from './components/binary-to-hexadecimal/binary-to-hexadecimal.component';
import { HexadecimalToBinaryComponent } from './components/hexadecimal-to-binary/hexadecimal-to-binary.component';

export const routes: Routes = [
    {path: '', component: MenuComponent},
    {path: 'text-to-binary', component: TextToBinaryComponent},
    {path: 'text-to-hexadecimal', component: TextToHexadecimalComponent},
    {path: 'number-to-binary', component: NumberToBinaryComponent},
    {path: 'binary-to-hexadecimal', component: BinaryToHexadecimalComponent},
    {path: 'hexadecimal-to-binary', component: HexadecimalToBinaryComponent},
];
