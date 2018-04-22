import { NgModule } from '@angular/core';
import { NicearmaLibComponent } from './nicearma-lib.component';
import {HelloComponent} from './hello/hello.component';

const Components = [
  NicearmaLibComponent,
  HelloComponent
];

@NgModule({
  imports: [
  ],
  declarations: [...Components
  ],
  exports: [...Components]
})
export class NicearmaLibModule { }
