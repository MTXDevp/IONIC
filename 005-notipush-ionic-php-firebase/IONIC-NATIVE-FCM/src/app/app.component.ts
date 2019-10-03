import { Component, ɵConsole } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ApiCallService } from './core/services/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  constructor(
    private localNotifications: LocalNotifications,
    private fcm: FCM,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public ApiCall : ApiCallService
  )
  {
    this.initializeApp();
  }

  initializeApp()
  {
    this.platform.ready().then(() =>
    {
      //variable usada en pruebas, evita que se pisen las notificaciones por tener el mismo id
      var id = 0;
      this.fcm.getToken().then(token =>
      {
        console.log(token);
        //IMPORTANTE -> usar dirección del servidor
        //DIRECCION SERVER PHP
        //this.ApiCall.sendToken("http://192.168.1.169/0020-PUSH-PRODU/PHP-FCM-SERVER-APP/src/index.php", token);
        //DIRECCION APIREST NODEJS
        this.ApiCall.sendToken("http://192.168.1.53:3000/send", token);
      });

      this.fcm.onTokenRefresh().subscribe(token =>
      {
        console.log(token);
        //IMPORTANTE -> usar dirección del servidor
        //DIRECCION SERVER PHP
        //this.ApiCall.sendToken("http://192.168.1.169/0020-PUSH-PRODU/PHP-FCM-SERVER-APP/src/index.php", token);
        //DIRECCION APIREST NODEJS
        this.ApiCall.sendToken("http://192.168.1.53:3000/send", token);
      });

      //Mandamos una petición a firebase para que nos mande un token
      //de acceso, para ello nos subscribimos esperando dicha respuesta
      this.fcm.onNotification().subscribe(data =>
      {
        console.log('noti',data);

        var result = data;
        var items = JSON.stringify(result); // then convert data to json string
        var allData = JSON.parse(items); // parse json data and pass json string
        console.log(allData);

        if (data.wasTapped) {

          console.log('Received in background');

        }else{

          console.log('Received in foreground');

          id = id + 1;
          this.localNotifications.schedule({
            id: id,
            title: allData['title'],
            text: allData['body'],
            led: { color: '#FF00FF', on: 500, off: 500 },
            lockscreen: true,
            //foreground: true
            //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
            //data: { secret: key }
          });
        };
      }, error =>
      {
        alert("error is "+JSON.stringify(error));
      });
      //posibles subscripciones a topics para implementar en un futuro
      //subscripciones a TOPICS
      //this.fcm.subscribeToTopic('people');
      //this.fcm.unsubscribeFromTopic('marketing');

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
