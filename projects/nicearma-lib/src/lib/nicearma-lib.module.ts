import {ModuleWithProviders, NgModule} from '@angular/core';
import {NicearmaLibComponent} from './nicearma-lib.component';
import {HelloComponent} from './hello/hello.component';
import {HelloService} from './hello/hello.service';
import {ExternalService} from './hello/external.service';
import {HttpClient} from '@angular/common/http';


const Components = [
  NicearmaLibComponent,
  HelloComponent
];

@NgModule({
  declarations: [...Components
  ],
  exports: [...Components],
  providers: [HelloService]
})
export class NicearmaLibModule {

  // public static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: NicearmaLibModule
  //   };
  //
  // }
}
