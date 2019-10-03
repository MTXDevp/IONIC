import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent
{
  //observable con la capacidad de getValor sin un evento intermediario
  authenticationState = new BehaviorSubject(false);
  tokenKey = "auth-token";

  constructor(
    private authenticationService: AuthenticationService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
    public toastController: ToastController
  )
  {
    this.initializeApp();
  }

  initializeApp()
  {
    this.platform.ready().then(() =>
    {
      this.authenticationService.authenticationState.subscribe(state => {

        if (state) {

            this.router.navigate(['home']);

        } else {

            this.router.navigate(['login']);
        }
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


}//final class