import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth,private router: Router) { }

  ngOnInit() {
  }

  logout = () => {
  		this.afAuth.auth.signOut();
  		this.router.navigateByUrl('/login');
  }

}
