import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

import { routing, appRoutingProviders } from './app.routing'; 

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ColorComponent } from './color/color.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact/contact.component';
import { MenuComponent } from './menu/menu.component';

//Firebase config

import { AngularFireModule } from 'angularfire2';

//FIX: Error while building "Cannot find namespace 'firebase'"
import * as firebase from 'firebase';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

import { AuthGuard } from './auth.service';
import { LoginService } from './login/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CochesComponent } from './coches/coches.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDwS5Pjc5S9EJMx4GR_VLYfYiy-09p6GtI",
    authDomain: "angulartest-e44c8.firebaseapp.com",
    databaseURL: "https://angulartest-e44c8.firebaseio.com",
    projectId: "angulartest-e44c8",
    storageBucket: "angulartest-e44c8.appspot.com",
    messagingSenderId: "335783117237"
};
 
@NgModule({
  declarations: [
    AppComponent, FrutaComponent, EmpleadosComponent, ColorComponent, 
    ErrorComponent, HomeComponent, ContactComponent, MenuComponent, LoginComponent, 
    SignupComponent, EmailComponent, CochesComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, 
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders, AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
