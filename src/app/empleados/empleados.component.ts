import {Component} from '@angular/core';
import {Empleado} from './empleado'

@Component({
	selector:'empleados',
	templateUrl:'./empleados.component.html'
})

export class EmpleadosComponent{
	public titulo;
	public empleados:Array<Empleado>;


	constructor(){
		this.titulo = 'Componente empleado'
		this.empleados= [new Empleado('Jose',26, 'Jefe de estudios', false, 'cyan')]
		this.empleados.push(new Empleado('Jesus',35, 'Profesor adjunto' ,true , 'indianred'))
		this.empleados.push(new Empleado('Lali',35, 'Becaria',true, 'pink' ))
		this.empleados.push(new Empleado('Juan',30, 'Profesor colaborador',false, 'lightyellow' ))

	}

	ngOnInit(){
		
	}

	cambiarExterno(){
		this.empleados[0].externo = this.empleados[1].externo;
		this.empleados[1].externo = !this.empleados[1].externo;
	}

	
}