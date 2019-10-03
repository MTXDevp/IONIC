import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage implements AfterViewInit{

  public latitud : number;
  public longitud : number;


  public constructor( private geolocation: Geolocation,
                      private locationAccuracy: LocationAccuracy){


    this.locationAccuracy.canRequest().then((canRequest: boolean) => {

      if(canRequest) {
      // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
          .then(
         () => alert('Alta precisión habilitado'),
        error => alert('Error requesting location permissions')
      );
    }
  });

    this.geolocation.getCurrentPosition({
      timeout: 20000, enableHighAccuracy:true}).then((resp) =>
    {

    alert("Latitud " + resp.coords.latitude + " // " + " Longitud " + resp.coords.longitude);

    this.latitud = resp.coords.latitude;
    this.longitud = resp.coords.longitude;

      }).catch((error) => {
          console.log('Error getting location', error);
       });
      }

    ngAfterViewInit(){
  }
  }
