import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HelloService} from './hello.service';
import {ExternalService} from './external.service';

@Component({
  selector: 'lib-hello',
  templateUrl: './hello.component.html',
  styles: []
})
export class HelloComponent implements OnInit {

  @Input()
  hello = new EventEmitter();

  constructor(public helloService: HelloService,
              public externalService: ExternalService
              ) {
  }

  ngOnInit() {
    this.helloService.sayHello();
    this.externalService.sayHola();
  }

}
