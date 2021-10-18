import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  numoculto: number = 1;
  numformulario: number =0;
  mensaje: string = "¿Vas a acertar rápido?"
  intentos: number =0;

  constructor() { }

  compruebaNumero(){
    console.log("Botón clickado");
    console.log(this.numformulario);
    console.log(this.numoculto);
    this.intentos++;
    if (this.numoculto>this.numformulario){
      this.mensaje="El número es mayor";
    }else if (this.numoculto<this.numformulario){
      this.mensaje="El número es menor";
    } else {
      this.mensaje="Felicidades. Acertaste en "+this.intentos+" intentos";
    }
  }

  ngOnInit() {
    //Generaramos número random al cargar
    this.numoculto =  Math.round(Math.random() * 100);
    console.log(this.numoculto);
  }

}
