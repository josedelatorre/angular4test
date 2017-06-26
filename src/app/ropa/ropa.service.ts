import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {

	public nombre_prenda = 'Pantalones vaqueros'
	public prendas = [
		{"id":1,"prenda":"Pantalones", "color":"rojo"},
		{"id":2,"prenda":"Camiseta", "color":"blanca"}
	]

  list(){
  	return this.prendas
  }

  add(prenda){
  		this.prendas.push(prenda)
  }

  nextId(){
  	return this.prendas.length > 0 ? this.prendas[this.prendas.length-1].id+1 : 1;
  }

  delete(id){
			var elem = this.prendas.filter(function( obj ) {
					return obj.id == id;
				});

			if(elem.length > 0){
				var index = this.prendas.indexOf(elem[0]);
				this.prendas.splice(index,1);
			}
  }

}
