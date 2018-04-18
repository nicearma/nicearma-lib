import { NgModule } from '@angular/core';
import { NicearmaLibComponent } from './nicearma-lib.component';

const Components = [
  NicearmaLibComponent
];

@NgModule({
  imports: [
  ],
  declarations: [...Components
  ],
  exports: [...Components]
})
export class NicearmaLibModule { }
