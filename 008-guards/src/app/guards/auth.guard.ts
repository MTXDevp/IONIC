import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
//clase encargada de proteger a que URLS tiene permiso un usuario.

export class AuthGuard implements CanActivate
{
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  public constructor(public auth: AuthenticationService)
  {
  }

  canActivate(): boolean
  {
    //accedemos al observable implementado en authetication
    //service y hacemos uno del metodo getAtutenticated para
    //preguntar si el usuario se ha autentificado previamente
    return this.auth.getAutenticated();
  }


}
