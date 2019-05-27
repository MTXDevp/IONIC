import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModuleTemplateDinamica1 } from './../Componentes/cambio-template-dinamica1/cambio-template-dinamica1.module'
import { HomePage } from './home.page';

@NgModule({
  imports: [
    ModuleTemplateDinamica1,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
