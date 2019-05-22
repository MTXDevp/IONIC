import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // dependiendo del stado del token aparecera una pantalla u otra dependiendo del estado
      this.authenticationService.authenticationState.subscribe(state => {

        if (state) {

          this.router.navigate(['dashboard']);

        } else {

          this.router.navigate(['login']);
        }
      });
    });
  }
}