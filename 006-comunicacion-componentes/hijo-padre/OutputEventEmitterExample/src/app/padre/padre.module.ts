import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PadrePage } from './padre.page';
import { HijoPage } from './../hijo/hijo.page';


const routes: Routes = [
  {
    path: '',
    component: PadrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PadrePage, HijoPage]
})
export class PadrePageModule {}
