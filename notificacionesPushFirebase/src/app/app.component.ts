import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServicioPush } from './../servicios/servicioPush';
//import { ToastService } from './shared/service/toast.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent
{
  constructor(
    public toastController : ToastController,
    private servicioPush: ServicioPush,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar)

  {
    this.initializeApp();
  }

  private async presentToast(message)
  {
    alert("Entro en present Toast");

    //creacion de un toast personalizado
    const toast = await this.toastController.create({
      message,
      duration: 3000
    });
    toast.present();
  }

  private notificationSetup()
  {
    alert("Entro en la configuracion de las notificaciones");

    this.servicioPush.getToken();

    //me subscribo a las notificaciones del servidor,
    //en este caso firebase

    this.servicioPush.onNotifications().subscribe(
      (msg) => {
        if (this.platform.is('ios'))
        {
          //llamamos al metodo que esta arriba el cual crea el mensaje a enviar
          this.presentToast(msg.aps.alert);
        }
        else
        {
          this.presentToast(msg.body);
        }
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.notificationSetup();
    });
  }
}