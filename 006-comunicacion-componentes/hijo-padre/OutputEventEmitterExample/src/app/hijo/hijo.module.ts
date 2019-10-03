import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HijoPage } from './hijo.page';

//import { Hijo2Component } from './../hijo2/hijo2.component';

const routes: Routes = [
  {
    path: '',
    component: HijoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HijoPage]
})
export class HijoPageModule {}
