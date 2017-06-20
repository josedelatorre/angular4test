export class Empleado{

	constructor(public nombre,public edad, public cargo, public externo, public color:string){
	
	}

	public toString =  () => this.nombre + ' tiene ' + this.edad + ' años'
	

}