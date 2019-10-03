import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  getMensaje: string;

  constructor() {}

  IntermediarioMensaje(mensaje: string)
  {
    this.getMensaje = mensaje;
    console.log("Padre comun recive mensaje :  " + this.getMensaje);
  }

}
