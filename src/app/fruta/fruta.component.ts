import {Component} from '@angular/core'

@Component({
	selector:'fruta',
	templateUrl:'./fruta.component.html'
})
export class FrutaComponent{
	nombre:string = 'José de la Torre López';
	edad:number = 8;



	public esMayorDeEdad = function() {
		if(this.edad >= 18) return 'Eres mayorcito ya eh...'
		else return 'Eres un yogurín aún...'
	}
	
}