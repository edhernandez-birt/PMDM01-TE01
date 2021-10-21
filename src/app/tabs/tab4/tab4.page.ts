import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  numOculto: number = 0;
  numFormulario: number = 50; //Por defecto ofrecemos el 50 que es el más probable para empezar
  mensaje: string = "Introduce un numero del 0 al 100"  //Mensaje inicial

  //Variables extra para controlar números de intentos, si se ha acertado y si el número introducido es válido
  intentos: number = 0;
  acertado: boolean = false;
  invalido: boolean = false; //Inicialmente no es invalido

  constructor() { }

  //Funcion que comprueba el número que se ha creado aleatoriamente en la carga de la página
  //con el introducido por el usuario en el formulario web.

  compruebaNumero() {
    //console.log de prueba
    console.log("Botón clickado");
    console.log(this.numFormulario);
    console.log(this.numOculto);

    //Comprobamos que no sea un número del 0 al 100 para dar aviso del error
    if (this.numFormulario < 0 || this.numFormulario > 100) {
      this.mensaje = "ERROR"; //Mensaje de error
      this.invalido = true; //Numero invalido
    } else {
      this.intentos++; //Sumamos un intento cada vez que clickamos comprobar un número válido
      this.invalido = false; //Este numero no es invalido
      if (this.numOculto > this.numFormulario) {
        this.mensaje = "El número es mayor";
      } else if (this.numOculto < this.numFormulario) {
        this.mensaje = "El número es menor";
      } else {
        this.mensaje = "Felicidades. Acertaste en " + this.intentos + " intentos";
        this.acertado = true;
      }
    }
  }

  //Función que genera un número aleatorio del 0 al 100 y lo devuelve
  generaNumero(): number {
    let numeroRandom: number = Math.round(Math.random() * 100);
    console.log(numeroRandom);
    return numeroRandom;
  }

  ngOnInit() {
    //Llamamos a generar el número oculto durante la carga de la página
    this.numOculto = this.generaNumero();
  }

}