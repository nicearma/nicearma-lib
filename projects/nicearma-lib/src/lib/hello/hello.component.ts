import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'lib-hello',
  templateUrl: './hello.component.html',
  styles: []
})
export class HelloComponent implements OnInit {

  @Input()
  hello = new EventEmitter();

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('/sayHello').subscribe((v) => {
      this.hello.emit(v);
    })
  }

}
