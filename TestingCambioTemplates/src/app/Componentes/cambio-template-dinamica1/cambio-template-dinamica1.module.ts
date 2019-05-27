import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponenteTemplateDinamica1 } from './cambio-template-dinamica1.component'


@NgModule({
  declarations: [
    ComponenteTemplateDinamica1
  ],
  exports: [
    ComponenteTemplateDinamica1
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ]
})
export class ModuleTemplateDinamica1 {}