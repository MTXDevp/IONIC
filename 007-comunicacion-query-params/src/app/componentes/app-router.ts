import {Routes } from '@angular/router';

export const routes: Routes =
[
  { path: ''        , redirectTo   : 'home' , pathMatch: 'full' },
  { path: 'home'    , loadChildren : './componentes/home/home.module#HomePageModule'                              },
  { path: 'pagina2' , loadChildren : './componentes/pagina2/pagina2.module#Pagina2PageModule'                     },
  { path: 'pagina3' , loadChildren : './componentes/pagina3/pagina3.module#Pagina3PageModule'                     },
  { path: 'pagina4' , loadChildren : './componentes/pagina4/pagina4.module#Pagina4PageModule'                     },
];
