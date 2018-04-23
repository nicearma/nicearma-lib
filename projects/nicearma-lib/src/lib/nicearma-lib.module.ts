import {NgModule} from '@angular/core';
import {NicearmaLibComponent} from './nicearma-lib.component';
import {HelloComponent} from './hello/hello.component';
import {HelloService} from './hello/hello.service';
import {PageComponent} from './page/page.component';
import {ExternalService} from './hello/external.service';

const Components = [
  NicearmaLibComponent,
  HelloComponent,
  PageComponent
];

@NgModule({
  declarations: [...Components
  ],
  exports: [...Components],
  providers: [HelloService, ExternalService]
})
export class NicearmaLibModule {

}
