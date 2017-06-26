import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { LoginService } from '../login/login.service'

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent  {

    state: string = '';
    error: any;
    user: Observable<firebase.User>;
    public email;

    constructor(public afAuth: AngularFireAuth,
    private router: Router, 
    private loginService: LoginService) {
    }


  onSubmit(formData) {
    if(formData.valid) {

      this.email =  formData.value.email
      let password = formData.value.password

      this.afAuth.auth.signInWithEmailAndPassword(this.email, password).then(
        (success) => {
          this.loginService.setUser(this.email)
          this.router.navigate(['/home']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

}
