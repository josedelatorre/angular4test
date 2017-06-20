import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public parametro;

  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router
  	) { }

  ngOnInit() {
  	this._route.params.forEach((params:Params) => {
  			this.parametro = params['param'];
  		})
  }

}
