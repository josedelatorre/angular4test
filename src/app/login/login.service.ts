import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs'

@Injectable()
export class LoginService {

  private user:string;

  constructor( ) { }

  setUser(data:string) {
    this.user = data;
  }

  getUser(){
    return this.user;
  }

}
