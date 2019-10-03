import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //Observable al que podemos suscribirnos para flujo de datos
  //Cuando nos suscribimos a el nos devolvera el ultimo valor que se emitio de inmediato
  //este observable nos permitira almacenar los datos a los que queremos acceder
  //en toda la aplicacion lile session storage

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage,
              private pla: Platform)
  {
    //cuando  iniciamos la aplicacion comprobamos si hay algun token anterior, la logica para
    //la caducidad del mismo debera de ser añadida en el siguente metodo

    this.pla.ready().then(() =>
    {
    	this.checkToken();
    });
  }

  checkToken()
  {
    this.storage.get(TOKEN_KEY).then(res =>
    {
      if (res)
      {
        this.authenticationState.next(true);

        alert("Arrancamos la aplicación con estado de token a " + this.getAutenticated());

      }else{

        this.authenticationState.next(false);

        alert("Arrancamos la aplicación con estado de token a " + this.getAutenticated());
      }
    })
  }

  setTokenTrue()
  {
    return this.storage.set(TOKEN_KEY, "Paco123").then(() =>
    {
      //tenemos en cuenta que este token nos lo devolvera el servidor cuando me logee

      this.authenticationState.next(true);
      alert("token a " + this.getAutenticated());
    });
  }

  setTokenFalse()
  {
    return this.storage.remove(TOKEN_KEY).then(() =>
    {
      this.authenticationState.next(false);
      alert("Cierras sesion estado del token a " + this.getAutenticated());
    });
  }

  getAutenticated()
  {
    return this.authenticationState.value;
  }
}
