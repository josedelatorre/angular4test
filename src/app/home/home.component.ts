import { Component, OnInit } from '@angular/core';
import { RopaService } from '../ropa/ropa.service'
import { Ropa } from '../ropa/ropa'
import { ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../login/login.service'

@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
	providers: [RopaService]
})
export class HomeComponent implements OnInit{
	public title = "Página principal";
	public nombre:string;
	public prenda:string;
	public color:string;
	public prendas

	constructor(private _ropaService: RopaService, 
	public route:ActivatedRoute,
	public loginService: LoginService){	}

	ngOnInit() {		
		this.prendas = this._ropaService.list();
		this.nombre = this.loginService.getUser();
	}

	public guardarUsuario = function(event){
		this.nombre = event.srcElement.value
	}

	public add = function() {
		var nuevaPrenda = new Ropa()
		nuevaPrenda.prenda = this.prenda;
		nuevaPrenda.color = this.color;
		nuevaPrenda.id = this._ropaService.nextId();

		this._ropaService.add(nuevaPrenda)
	}

	public delete = function(id){
		this._ropaService.delete(id);
	}



}