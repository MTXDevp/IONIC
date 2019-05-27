import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ComunicacionnHomeComponenteService } from './../Services/comunicacionn-home-componente.service'
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 //DESDE EL HOME PAGE HAREMOS UN INPUT EL CUAL ENVIARA UNA VARIABLE
 //ESE VALOR SERA SETEADO EN EL SERVICIO Y POSTERIORMENTE RECOJIDO DESDE
 //EL HOME QUE DECIDIRA QUE TEMPLATE MOSTRAR DEPENDIENDO DE LA VARIABLE

 //ESTO SIMULARA EN LA APLICACION REAL EL EXO DE QUE CUANDO PULSES

 //UN BOTON EN LADO IZQUIERDO SE MUESTRE UN FILTRO U OTRO EN EL LADO DERECHA

  templateSelect: string;

  
  constructor(private servicio : ComunicacionnHomeComponenteService) {

  
  }
  

  onKeyPressed(event){

    if(event.keyCode === 13) {
      
    this.servicio.setVariable(this.templateSelect);

    alert(this.servicio.GetVariable());

    }

    return true
}

  changeTemplate(){


  }

}
