import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent  {

  	constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase ,private router: Router) {

		    this.afAuth.authState.subscribe(auth => { 
		      if(auth) {
		        this.router.navigateByUrl('/home');
		      }
	    });

  	}

}
