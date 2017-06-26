import { Component } from '@angular/core';
import { RopaService } from '../ropa/ropa.service'

@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
	providers: [RopaService]
})
export class HomeComponent {
	public title = "Página principal";
	public nombre:string;
	public prenda:string;
	public color:string;
	public prendas

	constructor(private _ropaService: RopaService){
		this.prendas = this._ropaService.list();
	}

	public guardarUsuario = function(event){
		this.nombre = event.srcElement.value
	}

	public add = function() {
		var nuevaPrenda = {id:0,prenda:"", color:""};
		nuevaPrenda.prenda = this.prenda;
		nuevaPrenda.color = this.color;
		nuevaPrenda.id = this._ropaService.nextId();

		this._ropaService.add(nuevaPrenda)
	}

	public delete = function(id){
		this._ropaService.delete(id);
	}



}