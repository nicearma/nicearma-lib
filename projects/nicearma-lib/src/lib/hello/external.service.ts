import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ExternalService {

  constructor(public httpClient: HttpClient) {

  }

  sayHola() {
    this.httpClient.get('sayHola').subscribe();
    console.log('hola');
  }

}
