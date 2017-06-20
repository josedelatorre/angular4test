import {Component} from '@angular/core';

@Component({
	selector:'color',
	templateUrl:'./color.component.html',
	styleUrls:['./color.component.css']
})
export class ColorComponent {
	public fondo:string;
	public letra:string;
	public grande:boolean;
}