import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { ServicioPush } from './../servicios/servicioPush';


const config = {
  apiKey: "AIzaSyCWo1sHBqYqt30xLQOHdmHIMqRVhCvOMPM",
  authDomain: "idnotificaconespush.firebaseapp.com",
  databaseURL: "https://idnotificaconespush.firebaseio.com",
  projectId: "idnotificaconespush",
  storageBucket: "idnotificaconespush.appspot.com",
  messagingSenderId: "97909822764",
  appId: "1:97909822764:web:f52ce4a1f1a4dcd3"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [

    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule],

  providers: [
    ServicioPush,
    StatusBar,
    SplashScreen,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
