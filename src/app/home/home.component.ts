import { Component } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: 'home.component.html'
})
export class HomeComponent{
	public title = "Página principal";
	public nombre:string;

	public guardarUsuario = function(event){
		this.nombre = event.srcElement.value
	}
}