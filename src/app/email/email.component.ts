import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

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

    constructor(public afAuth: AngularFireAuth,private router: Router) {
      this.afAuth.authState.subscribe(auth => { 
        if(auth) {
          this.router.navigateByUrl('/home');
        }
      });
    }


  onSubmit(formData) {
    if(formData.valid) {

      let email =  formData.value.email
      let password = formData.value.password

      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/home']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

}
