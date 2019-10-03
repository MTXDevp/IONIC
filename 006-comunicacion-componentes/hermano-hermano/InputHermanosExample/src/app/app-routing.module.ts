import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./componentes/home/home.module').then( m => m.HomePageModule)},
  { path: 'hermano1', loadChildren: './componentes/hermano1/hermano1.module#Hermano1PageModule' },
  { path: 'hermano2', loadChildren: './componentes/hermano2/hermano2.module#Hermano2PageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
