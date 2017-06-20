import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent {

  state: string = '';
  error: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {

  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      
      let email =  formData.value.email
      let password = formData.value.password
      

      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
        (success) => {
          this.router.navigate(['/login'])
        }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

}
