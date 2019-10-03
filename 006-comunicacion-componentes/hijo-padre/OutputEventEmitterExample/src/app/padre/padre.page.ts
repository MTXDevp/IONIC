import { Component, Input, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.page.html',
  styleUrls: ['./padre.page.scss'],
})
export class PadrePage
{
  constructor()
  {
  }

  GetMsg(mensaje: string) {
    console.log(mensaje);
  }
}
