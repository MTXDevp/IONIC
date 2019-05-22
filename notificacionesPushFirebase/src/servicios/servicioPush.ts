
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ServicioPush {

  constructor(private firebase: Firebase,
              private afs: AngularFirestore,
              private platform: Platform) {}

	//para mandar una notificacion push a un telefono deberemos de
	//identificarlo mediante un token

  async getToken() {
    let token;
		//Deberemos de chekear la plataforma puesto que el request
    //de permisos es diferente en cada plataforma

    if (this.platform.is('android'))
    {
      token = await this.firebase.getToken();

      alert("El token del dispositivo ANDROID es : " + token);

    } else if (this.platform.is('ios')){

      token = await this.firebase.getToken();

      await this.firebase.grantPermission();
    }
    else
    {
      alert("No he detectado ningun dispotivo");
    }

    this.saveToken(token);
  }

  private saveToken(token)
  {
    alert("He entrado a salvar token");

    if (!token) return;

    const devicesRef = this.afs.collection('devices');

    const data = {
      token,
      userId: 'testUserId'
    };

    return devicesRef.doc(token).set(data);
  }

	//Nos suscribimos a las notificaciones
  onNotifications()
  {

    alert("Me he suscrito a cambios pòr parte de servidor");;

    return this.firebase.onNotificationOpen();
  }
}
