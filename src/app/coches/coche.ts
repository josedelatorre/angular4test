
export class Coche{
    constructor(
        public matricula:string,
        public marca:string,
        public modelo:string
    ){}

    toString = () => this.matricula + " - " + this.marca + " " + this.modelo
}