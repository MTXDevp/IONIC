import { NgModule                                } from '@angular/core'  ;
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


/**
 * JGSGHSGKGIHASYGDU KIDG DGLIAG ÑIDULUSYH IUSGISG OSH IUGS
 * idsfh dosfiuodsfh odshif oidshfo idshf oidsfh oidsfhds
 *
 * * ISBIUBSIUBDISU
 * ! fkhgid fgidusfg iudfgiudsfg iudsfh iudsfds
 * - fgiudshiudsfh oudsfhodusfhodsufhodsfsdjfiodsf
 * + iughiudfhoudsfhodshfodsihfodsihfiouds
 * ? iufhidhfosdhfeohfwehfehfewo
 *
 * @jhcvb hhd difiudsfhiudsfodisfudfhdosfh
 */
const routes : Routes =
[
  {
    path       : '',
    redirectTo : 'home',
    pathMatch  : 'full'
  },
  {
    path         : 'home',
    loadChildren : './home/home.module#HomePageModule'
  },
];


@NgModule(
{
  imports:
  [
    RouterModule.forRoot(routes, { preloadingStrategy : PreloadAllModules })
  ],

    exports : [RouterModule]
})


export class AppRoutingModule { }
