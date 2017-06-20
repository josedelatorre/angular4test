import {Component} from '@angular/core'

@Component({
	selector:'error',
	template:`<div class="container-fluid">
	<h1>Ups... parece ser que la página que estás buscando no existe.</h1>
	<h3><a [routerLink]="['/home']">¿Volvemos al principio?</a></h3>
	</div>`
})
export class ErrorComponent{ }