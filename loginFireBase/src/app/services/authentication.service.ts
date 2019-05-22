import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Firebase } from '@ionic-native/firebase/ngx';
import * as firebase from 'firebase'

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //Observable al que podemos suscribirnos para flujo de datos
  //Cuando nos suscribimos a el nos devolvera el ultimo valor que se emitio de inmediato
  //este observable nos permitira almacenar los datos a los que queremos acceder
  //en toda la aplicacion lile session storage

  //** Nos notificara si existen cambios **//

  authenticationState = new BehaviorSubject(false);

  constructor(
              private firebase: Firebase,
              private storage: Storage,
              private pla: Platform
              )
  {
    //cuando  iniciamos la aplicacion comprobamos si hay algun token anterior, la logica para
    //la caducidad del mismo debera de ser añadida en el siguente metodo

    this.pla.ready().then(() =>
    {
      this.checkToken();
    });
  }

  registerUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }

  loginUser(value)
  {
    //accion asincrona
   // Se utilizan cuando no se puede retornar el valor de una función porque aún no se conoce, pero no podemos dejar que bloqueen la función esperando a que llegue.

    return new Promise<any>((resolve, reject) =>
    {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(

        res => resolve(this.setTokenTrue()),

        err => reject(alert("Contraseña incorrecta")))
    })
  }

  logoutUser(){

    return new Promise((resolve, reject) => {

      this.setTokenFalse();

      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {

          resolve();

        }).catch((error) =>
        {

          reject();

        });
      }
    })
  }

  userDetails(){
    return firebase.auth().currentUser;
  }

// FIN FIREBASEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

  checkToken()
  {
    this.storage.get(TOKEN_KEY).then(res =>
    {
      if (res)
      {
        //si el token existe como el estado del observable a true

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
