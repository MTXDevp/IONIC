import {Routes } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';

export const routes: Routes =
[
  { path: ''        , redirectTo   : 'home' , pathMatch: 'full' },
    { path: 'home'  , loadChildren: './../componentes/home/home.module#HomePageModule' },
    { path: 'login' , loadChildren: './../componentes/login/login.module#LoginPageModule' }
];
