import { NgModule } from '@angular/core';
import { routes } from './componentes/app-route';
import { PreloadAllModules, RouterModule, Routes} from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
