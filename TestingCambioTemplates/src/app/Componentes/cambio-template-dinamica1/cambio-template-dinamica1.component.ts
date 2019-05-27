import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ComunicacionnHomeComponenteService } from './../../Services/comunicacionn-home-componente.service'
import { strict } from 'assert';

@Component({
  selector: 'templateDinamica1',
  templateUrl: 'cambio-template-dinamica1.html'
})
export class ComponenteTemplateDinamica1 {

  @ViewChild('1') filtroBasico1: TemplateRef<any>;
  @ViewChild('2') filtroBasico2: TemplateRef<any>;

  prueba : string = '';
  setValor : string = 'NO VALUE'
  valor : string = '';
  web: boolean;
  name = 'Dynamic Temmplates';
  filtroBasico : string = 'filtroBasico';

  constructor(private servicio : ComunicacionnHomeComponenteService) {

    this.web = true;
  }

  mandarAlHomeFiltroBasico(){

    this.setValor = this.valor;
  }

  get getTemplate() {

    this.prueba = this.servicio.GetVariable();

    //alert(this.prueba);
    //alert(this.filtroBasico);
    //console.log(this.prueba);
    //console.log(this.filtroBasico);

    this.filtroBasico = this.filtroBasico + this.prueba;

    console.log(this.filtroBasico);

    //this.filtroBasico = this.filtroBasico.concat(this.prueba);
    return this.filtroBasico;
  }
}
