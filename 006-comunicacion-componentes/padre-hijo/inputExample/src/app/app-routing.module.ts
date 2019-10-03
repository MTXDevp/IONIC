import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'padre', pathMatch: 'full' },
  { path: 'padre', loadChildren: './componentes/padre/padre.module#PadrePageModule' },
  { path: 'hijo', loadChildren: './componentes/hijo/hijo.module#HijoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
