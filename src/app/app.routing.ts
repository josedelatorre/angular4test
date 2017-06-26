import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule} from '@angular/router'

import { EmpleadosComponent } from './empleados/empleados.component'
import { ColorComponent } from './color/color.component'
import { ErrorComponent } from './error/error.component'
import { HomeComponent } from './home/home.component'
import { EmailComponent } from './email/email.component'
import { SignupComponent } from './signup/signup.component'
import { ContactComponent } from './contact/contact/contact.component'
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.service';

const appRoutes : Routes = [
	{path: '', component: LoginComponent},
	{path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
	{path: 'home/:user', component: HomeComponent, canActivate: [AuthGuard]},
	{path: 'empleados', component: EmpleadosComponent, canActivate: [AuthGuard]},
	{path: 'color', component: ColorComponent, canActivate: [AuthGuard]},
	{path: 'login', component: LoginComponent},
	{path: 'email', component: EmailComponent},
	{path: 'signup', component: SignupComponent},
	{path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
	{path: 'contact/:param', component: ContactComponent, canActivate: [AuthGuard]},
	{path: '**', component: ErrorComponent} 
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);