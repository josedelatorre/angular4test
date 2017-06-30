import { Component, OnInit } from '@angular/core';
import {Coche} from './coche'

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  public coche:Coche
  public coches:Array<Coche>
  public index:number

  constructor() {
    this.coche = new Coche("","","")
    this.index = 0
    this.coches = new Array<Coche>();
   }

  ngOnInit() {
  }

  addCoche = () => {
    var newCoche = new Coche(this.coche.matricula, this.coche.marca, this.coche.modelo)
    this.coches.push(newCoche)
    this.index++;
  }
  
  nextCoche = () => {
    if(this.coches.length > 0){
      if(++this.index >= this.coches.length)
        this.index = 0

      this.coche = this.coches[this.index]
    }
  }

  prevCoche = () => {
    if(this.coches.length > 0){
      if(--this.index < 0)
        this.index = this.coches.length-1

      this.coche = this.coches[this.index]
    }
  }

}
