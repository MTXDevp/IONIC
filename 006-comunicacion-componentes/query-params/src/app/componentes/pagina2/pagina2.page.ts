import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page
{

  head: any;
  body: any;

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router
  )
  {

    this.router.routeReuseStrategy.shouldReuseRoute = function ()
    {
      return false;
    }

 this.activedRoute.params.subscribe(routeParams => {
  });

  this.activedRoute.queryParams.subscribe(params =>
  {
   if (this.router.getCurrentNavigation().extras.state)
   {
     this.head = this.router.getCurrentNavigation().extras.state.head;
     this.body = this.router.getCurrentNavigation().extras.state.body;

     console.log("Estas en : " + this.head + "\n");
     console.log("Contenido : " + this.body);

    }else{
     console.log("entra a queryparams pero no accede a los extras");
    }
    });
  }
}
